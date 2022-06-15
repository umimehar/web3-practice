import React, { useEffect } from "react";
import {
  Box,
  chakra,
  Flex,
  HStack,
  HTMLChakraProps,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "@components/html/logo";
import { BaseLink } from "@components/base/base-link";
import { Yup } from "@util/yup";

export function FooterContainer() {
  const year = new Date().getFullYear();
  return (
    <>
      <Box as="footer" bg={"white"}>
        <Box
          px={{ base: 4, md: 6, lg: 8 }}
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          py={{ base: "12" }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            mb={{ base: "10", lg: "16" }}
            align="flex-start"
            id="top"
          >
            <SimpleGrid
              flex="1"
              w={{ base: "full", lg: "auto" }}
              maxW={{ lg: "2xl" }}
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: "12", md: "10" }}
              fontSize="sm"
              marginEnd={{ md: "4", lg: "16" }}
            >
              {links.map((group, idx) => (
                <LinkGroup key={idx} data={group} />
              ))}
            </SimpleGrid>
            <Box
              flex="2"
              maxW={{ lg: "420px" }}
              ml={{ lg: "auto" }}
              fontSize="sm"
              mt={{ base: "12", lg: 0 }}
            >
              <Text
                casing="uppercase"
                mb={{ base: 6, lg: 10 }}
                fontWeight="bold"
                letterSpacing="wide"
              >
                Subscribe
              </Text>
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column-reverse", lg: "row" }}
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            fontSize="sm"
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "4", md: "12" }}
              mt={{ base: "8", lg: 0 }}
              w={{ base: "full", lg: "auto" }}
              justify={{ base: "space-between", lg: "flex-start" }}
              align={{ base: "flex-start", md: "center" }}
            >
              <BaseLink route={"/home"}>
                <Logo mx="auto" w="90px" />
              </BaseLink>
              <HStack spacing="2" mt={{ lg: "8" }} as="ul" listStyleType="none">
                {socialLinks.map((link, idx) => (
                  <Box as="li" key={idx}>
                    <SocialLink href={link.href}>
                      <Box srOnly>{link.label}</Box>
                      {link.icon}
                    </SocialLink>
                  </Box>
                ))}
              </HStack>
            </Stack>
            <Box>
              <Text>&copy; {year} web3, All rights reserved.</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

interface ILinkGroupProps {
  data: LinkGroupData;
}

function LinkGroup(props: ILinkGroupProps) {
  const { data } = props;
  const { links, title } = data;

  return (
    <Box>
      <Text
        textTransform="uppercase"
        mb={{ base: "6", md: "10" }}
        fontWeight="bold"
        letterSpacing="wide"
      >
        {title}
      </Text>
      <Stack as="ul" spacing={{ base: 2, md: 4 }} listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx}>
            <BaseLink
              route={link.href}
              _hover={{ textDecoration: "underline" }}
            >
              <span>{link.label}</span>
            </BaseLink>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

function SocialLink(props: HTMLChakraProps<"a">) {
  return (
    <chakra.a
      rounded="lg"
      w="10"
      h="10"
      fontSize="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.2s"
      _hover={{
        bg: "gray.100",
        color: "blue.500",
      }}
      {...props}
    />
  );
}

const schema = Yup.object().shape({
  email: Yup.string().required().email(),
});

interface LinkGroupData {
  title: string;
  links: Array<{
    label: string;
    href: string;
    badge?: React.ReactElement;
  }>;
}

const links: LinkGroupData[] = [
  {
    title: "Get Started",
    links: [],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "about-us" },
      { label: "Careers", href: "careers" },
      { label: "Contact us", href: "contact-us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", href: "privacy-policy" },
      { label: "Terms of Service", href: "terms-of-service" },
    ],
  },
];

interface ISocialLink {
  label: string;
  icon: React.ReactElement;
  href: string;
}

const socialLinks: ISocialLink[] = [
  {
    label: "Facebook",
    icon: <FaFacebook />,
    href: "https://www.facebook.com/",
  },
  { label: "Instagram", icon: <FaInstagram />, href: "http://instagram.com/" },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/",
  },
  { label: "Twitter", icon: <FaTwitter />, href: "http://twitter.com/" },
];
