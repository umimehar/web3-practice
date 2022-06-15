import type { NextPage } from "next";
import { Page, Section } from "reactjs-slot-layout/dist";
import { HeaderContainer } from "@components/header-app/header-container";
import { HtmlHead } from "@components/html/html-head";
import { Box, Container, Heading, useToast } from "@chakra-ui/react";
import NftForm from "@components/nft-form";
import { useMintNFT, useNFTCollection, useAddress } from "@thirdweb-dev/react";
import { useAuth } from "src/context/AuthContext";

const Claim: NextPage = () => {
  const toast = useToast();
  const nftCollection = useNFTCollection(
    process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
  );
  const {
    walletAddresses: [address],
  } = useAuth();

  const { mutateAsync: mintNFT } = useMintNFT(nftCollection);

  const claimNFT = async (d: any) => {
    const result = await fetch("/api/sign-payload", {
      method: "POST",
      body: JSON.stringify({ to: address, metadata: d }),
    });
    const resp = await result.json();
    console.log(resp);
    // console.log(contract.getAddress());
    // const signedPayload = await nftCollection.signature.generate({
    //   to: address,
    //   metadata: d,
    // });
    // const tx = await mintNFT({ to: address, metadata: d });
    // console.log(tx);
    // await contract.signature.mint(signedPayload);
    // await mintNFT(signedPayload);
    toast({
      title: `NFT has been claimed.`,
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Page layout="OneColumn">
      <Section slot="header">
        <HeaderContainer />
      </Section>
      <Section slot="footer">{/*<FooterContainer />*/}</Section>
      <Section slot="content">
        <HtmlHead title="Claim" description="Claim Web3" />
        <Container maxW={{ base: "xl", md: "7xl" }}>
          <Heading mb={3} variant={"h2"} color={"primaryBlue.800"} w={"full"}>
            Claim NFT
          </Heading>
          <Box>
            {address ? (
              <Box mt={5} px={5}>
                <NftForm onSubmit={claimNFT} />
              </Box>
            ) : (
              <Heading
                align={"center"}
                bg={"gray.300"}
                py={6}
                px={3}
                color={"gray.700"}
                rounded={"lg"}
              >
                Connect your wallet to claim NFT
              </Heading>
            )}
          </Box>
        </Container>
      </Section>
    </Page>
  );
};

export default Claim;
