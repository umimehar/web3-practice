import type { NextPage } from "next";
import { Page, Section } from "reactjs-slot-layout/dist";
import { HeaderContainer } from "@components/header-app/header-container";
import { HtmlHead } from "@components/html/html-head";
import {
  Grid,
  Container,
  Heading,
  Flex,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import { useGetNFTs } from "./hooks/useGetNFTs";
import NFT from "@components/nfts/nft";
import NFTLoader from "@components/nfts/nft-loader";

const Gallery: NextPage = () => {
  const { data: nfts, refetch, isLoading } = useGetNFTs({ count: 6 });

  return (
    <Page layout="OneColumn">
      <Section slot="header">
        <HeaderContainer />
      </Section>
      <Section slot="footer">{/*<FooterContainer />*/}</Section>
      <Section slot="content">
        <HtmlHead title="Gallery" description="Gallery Web3" />
        <Container maxW={{ md: "7xl" }}>
          <Heading
            align={"center"}
            as="h4"
            size="md"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            my={4}
            lineHeight={"1.1em"}
          >
            Gallery
          </Heading>

          {isLoading ? (
            <Flex
              direction="column"
              justifyContent="center"
              maxW={{ xl: "1200px" }}
              m="0 auto"
              minH="100vh"
            >
              <Grid
                w="full"
                gridGap="1"
                gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
              >
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <NFTLoader key={`nft-loader-${index}`} />
                  ))}
              </Grid>
            </Flex>
          ) : (
            <Flex
              direction="column"
              justifyContent="center"
              maxW={{ xl: "1200px" }}
              m="0 auto"
              minH="100vh"
            >
              <Grid
                w="full"
                gridGap="1"
                gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
              >
                {nfts?.map((nft: any) => (
                  <NFT key={nft.id} {...nft} refetch={refetch} />
                ))}
              </Grid>
            </Flex>
          )}
        </Container>
      </Section>
    </Page>
  );
};

export default Gallery;
