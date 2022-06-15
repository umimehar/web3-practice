import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
  useToast,
  useMemo,
} from "@chakra-ui/react";
import { Image } from "@components/Image";
import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useAuth } from "src/context/AuthContext";
import { queryClient } from "@util/sdks/react-query";
import { ADAPTER_EVENTS } from "@web3auth/base";
import Web3 from "web3";
import { ethers } from 'ethers';

export type NFTProps = {
  price: number;
  id: number;
  name: string;
  description: string;
  url: string;
  minted: boolean;
  owner?: string;
  refetch: any;
};
export default function NFT(props: NFTProps) {
  const { price, id, name, description, url, minted, owner, refetch } = props;
  const {
    user,
    walletAddresses: [address, ...rest],
    privateKey,
    ethersProvider,
    web3AuthInstance,
  } = useAuth();
  const [loading, setLoading] = useState(false);
  // const [sdk, setSdk] = useState<ThirdwebSDK>(null);
  const sdk: ThirdwebSDK = useMemo(() => {
    if (!ethersProvider) return new ThirdwebSDK(ethers.getDefaultProvider());
    return ThirdwebSDK.fromSigner(ethersProvider.getSigner(), "rinkeby", {
      gasless: {
        openzeppelin: { relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL },
      },
    });
  }, [ethersProvider]);

  // useEffect(() => {
  //   if (!ethersProvider) return;
  //   // add other configs
  //   const sdk = ThirdwebSDK.fromSigner(ethersProvider.getSigner(), "rinkeby", {
  //     gasless: {
  //       openzeppelin: { relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL },
  //     },
  //   });
  //   setSdk(sdk);
  // }, [ethersProvider]);

  useEffect(() => {
    sdk.on('transaction', console.log);
    sdk.on('signature', console.log);
  }, []);

  const toast = useToast();

  const mintNft = async (id: number, address: string) => {
    setLoading(true);

    try {
      // Call API to generate signature and payload for minting
      const response = await fetch("/api/get-nfts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, address }),
      });

      if (response) {
        const data = await response.json();
        const mintInput = {
          signature: data.signature,
          payload: data.payload,
        };
        const nftCollection = await sdk.getNFTCollection(
          process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
        );


        // move this to sdk
        console.log(web3AuthInstance);
        // mint nfts for openlogin
        // if (web3AuthInstance.connectedAdapterName === "openlogin") {
        //   // sign the transaction and send
        //   toast({
        //     title: `For Open login, gassless transaction is on the way. right now only metamask transaction is supported`,
        //     status: "error",
        //     isClosable: true,
        //   });
        //   // nftCollection.signature.generate();
        // } else {

        // console the event and get the signature
        // use https://www.biconomy.io/ for gassless transactions
        // use magic link.

        // solana, metaplex, candi machine v2, polygone

        // L1 vs L2
        // wolf and sheep game.
        web3AuthInstance.on("mintWithSignature", (e) => {
          console.log(e);
        });

        await nftCollection.signature.mint(mintInput);
        // const web3 = new Web3(web3AuthInstance.provider as any);
        // const txRes = await web3.eth.sendTransaction({
        //   from: accounts[0],
        //   to: accounts[0],
        //   value: web3.utils.toWei("0.01"),
        // });

        toast({
          title: `NFT has been claimed.`,
          status: "success",
          isClosable: true,
        });
        // refresh this nft
        await queryClient.removeQueries("get-nfts");
        refetch();
        // }

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: `failed to mind NFT.`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={0}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"330px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundColor: "black",
            // backgroundImage: `url(${url})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          // _groupHover={{
          //   _after: {
          //     filter: "blur(20px)",
          //   },
          // }}
        >
          <Image
            rounded={"lg"}
            height={330}
            width={282}
            objectFit={"cover"}
            src={url}
            alt={name}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text fontSize={"md"} textTransform={"uppercase"}>
            {name}
          </Text>
          <Heading
            fontSize={"sm"}
            color={"gray.500"}
            fontFamily={"body"}
            fontWeight={500}
            lineHeight={1}
          >
            {description}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price} ETH
            </Text>
          </Stack>
          <Stack>
            <Button
              as="button"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, teal.500, green.500)"
              size={"md"}
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
              isDisabled={!address || loading}
              isLoading={loading}
              loadingText={"Claiming..."}
              onClick={() => mintNft(id, address)}
            >
              {address ? "Claim" : "Connect to Claim"}
            </Button>
          </Stack>
        </Stack>

        {minted && (
          <Box
            pos={"absolute"}
            w={"full"}
            right={0}
            left={0}
            bottom={0}
            top={"-21px"}
            bg={"rgba(0,0,0,0.4)"}
            rounded={"lg"}
            zIndex={1}
          >
            <Flex
              h={"full"}
              w={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading
                as={"h5"}
                variant={"md"}
                color={"white"}
                fontWeight={"bold"}
              >
                {owner === address ? "Owned" : "Not Available"}
              </Heading>
            </Flex>
          </Box>
        )}
      </Box>
    </Center>
  );
}
