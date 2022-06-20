import type { NextApiRequest, NextApiResponse } from "next";
import {
  ThirdwebSDK,
  NFTMetadataOwner,
  PayloadToSign721,
} from "@thirdweb-dev/sdk";
import nfts from "./nfts.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Connect to thirdweb SDK

  const sdk = ThirdwebSDK.fromPrivateKey(
    // Your wallet private key
    String(process.env.WALLET_PRIVATE_KEY),
    "rinkeby",
    {
      gasless: {
        openzeppelin: { relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL },
      },
    }
  );

  // Initialize the NFT collection with the contract address
  const nftCollection = sdk.getNFTCollection(
    process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
  );

  switch (req.method) {
    case "GET":
      const { count = "20", start } = req.query as {
        count: string;
        start: string;
      };

      try {
        // Get all the NFTs that have been minted from the contract
        const mintedNfts: NFTMetadataOwner[] = await nftCollection?.getAll();

        // If no NFTs have been minted, return the array of NFT metadata
        if (!mintedNfts) {
          res.status(200).json(nfts);
        }
        // If there are NFTs that have been minted, go through each of them
        mintedNfts.forEach((nft) => {
          if (nft.metadata.attributes) {
            // Find the id attribute of the current NFT
            // @ts-expect-error
            const mintedId = nft.metadata.attributes.id;
            const positionInMetadataArray = nfts.findIndex(
              (n) => n.id === mintedId
            );
            // Change the minted status of the NFT metadata at the position of ID in the NFT metadata array
            if (positionInMetadataArray > -1) {
              nfts[positionInMetadataArray].minted = true;
              (nfts[positionInMetadataArray] as any).owner = nft.owner;
              (nfts[positionInMetadataArray] as any).tokenId = nft.metadata.id;
            }
          }
        });
      } catch (error) {
        console.error(error);
      }
      res.status(200).json(nfts);
      break;
    case "POST":
      // Get ID of the NFT to mint and address of the user from request body
      const { id, address } = req.body;

      if (!(id && address)) {
        res.status(400).json({ message: "Invalid request" });
      }
      // Find the NFT to mint in the array of NFT metadata using the ID
      const nftToMint = nfts.find((n) => n.id === id);

      // Ensure that the requested NFT has not yet been minted
      if (nftToMint.minted === true) {
        res.status(400).json({ message: "Invalid request" });
      }

      // Allow the minting to happen anytime from now
      const startTime = new Date(0);

      // Set up the NFT metadata for signature generation
      const metadata: PayloadToSign721 = {
        metadata: {
          name: nftToMint.name,
          description: nftToMint.description,
          image: nftToMint.url,
          // Set the id attribute which we use to find which NFTs have been minted
          attributes: { id },
        },
        // price: nftToMint.price,
        mintStartTime: startTime,
        to: address,
      };

      try {
        const response = await nftCollection?.signature.generate(metadata);

        // Respond with the payload and signature which will be used in the frontend to mint the NFT
        res.status(201).json({
          payload: response?.payload,
          signature: response?.signature,
        });
      } catch (error) {
        res.status(500).json({ error });
        console.error(error);
      }
      break;
    default:
      res.status(200).json(nfts);
  }
}
