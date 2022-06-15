import type { NextPage } from "next";
import { Page, Section } from "reactjs-slot-layout/dist";
import { HeaderContainer } from "@components/header-app/header-container";
import { HtmlHead } from "@components/html/html-head";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Icon,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { TbArrowWaveLeftUp } from "react-icons/tb";

const Claim: NextPage = () => {
  return (
    <Page layout="OneColumn">
      <Section slot="header">
        <HeaderContainer />
      </Section>
      <Section slot="footer">{/*<FooterContainer />*/}</Section>
      <Section slot="content">
        <HtmlHead title="web3 home" description="Web3 home" />
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Zombies NFTs <br />
              <Text as={"span"} color={"green.400"}>
                Exclusive to the Zombie Nation
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Monetize your content by charging your most loyal readers and
              reward them loyalty points. Give back to your loyal readers by
              granting them access to your pre-releases and sneak-peaks.
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Get Started
              </Button>
              <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                Learn more
              </Button>
              <Box>
                <Icon
                  as={TbArrowWaveLeftUp}
                  color={useColorModeValue("gray.800", "gray.300")}
                  w={71}
                  fontSize={"3xl"}
                  position={"absolute"}
                  right={-71}
                  top={"10px"}
                />
                <Text
                  fontSize={"lg"}
                  fontFamily={"Caveat"}
                  position={"absolute"}
                  right={"-100px"}
                  top={"-5px"}
                  transform={"rotate(10deg)"}
                >
                  Starting free
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
};

export default Claim;
