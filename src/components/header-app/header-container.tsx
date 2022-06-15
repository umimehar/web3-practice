import React, { isValidElement, ReactElement } from "react";
import {
  Box,
  CloseButton,
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { Logo } from "@components/html/logo";
import { BaseLink } from "@components/base/base-link";
import { WalletConnect } from "@components/header-app/wallet-connect";

type NavLinkProps = {
  isActive?: boolean;
  route: string;
  params?: any;
  children: any;
};

function LinkBox(props: Partial<NavLinkProps>) {
  const { isActive, children } = props;
  return (
    <Box
      display="flex"
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.25rem"
      aria-current={isActive ? "page" : undefined}
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      _activeLink={{
        bg: "blue.600",
        color: "white",
      }}
    >
      {children}
    </Box>
  );
}

function NavLink(props: NavLinkProps) {
  const { isActive, route, params, children } = props;
  return (
    <BaseLink route={route} params={params}>
      <LinkBox isActive={isActive}>{children}</LinkBox>
    </BaseLink>
  );
}

function MobileNavContent(props: any) {
  const { isOpen, onClose, children } = props;
  const bg = "white";
  return (
    <>
      {isOpen && (
        <Flex
          direction="column"
          w="100%"
          bg={bg}
          h="100vh"
          overflow="auto"
          pos="absolute"
          top={0}
          left={0}
          zIndex={20}
          px={4}
          py={2}
        >
          {children}
          <CloseButton pos="absolute" top={2} right={4} onClick={onClose} />
        </Flex>
      )}
    </>
  );
}

export function HeaderContainer({
  hideMenu = false,
  topText,
  hideUserMenu = false,
}: {
  hideMenu?: boolean;
  topText?: string;
  hideUserMenu?: boolean;
}) {
  const { route } = useRouter();

  return (
    <Navbar>
      {/*@ts-ignore*/}
      <Navbar.Brand>
        <BaseLink route={"/home"}>
          <Logo mx="auto" w="90px" h={"60px"} />
        </BaseLink>
      </Navbar.Brand>
      {/*@ts-ignore*/}
      <Navbar.Links>
        {!hideMenu && (
          <>
            <NavLink route={"/"} isActive={route === "/"}>
              Home
            </NavLink>
            {/*<NavLink route={"/claim"} isActive={route === "/claim"}>*/}
            {/*  Claim*/}
            {/*</NavLink>*/}
            <NavLink route={"/gallery"} isActive={route === "/gallery"}>
              Gallery
            </NavLink>
            {/*<Spacer />*/}
            <Center display={{ base: "flex", md: "none" }}>
              <WalletConnect />
            </Center>
          </>
        )}
        {topText && (
          <Box fontWeight="medium" lineHeight="1.25rem">
            {topText}
          </Box>
        )}
      </Navbar.Links>
    </Navbar>
  );
}

function Template(props: any) {
  const children = React.Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );
  const mobileNav = useDisclosure();
  return (
    <Box bg={"white"}>
      <Flex
        py={2}
        px={{ base: 2, md: 4, lg: 6 }}
        maxW={{ base: "none", md: "7xl" }}
        mx={{ base: "none", md: "full", lg: "auto" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {children.find((child) => child.type === Brand)?.props.children}
        <HStack spacing={3} ms={10} display={{ base: "none", md: "flex" }}>
          {children.find((child) => child.type === Links)?.props.children}
        </HStack>
        <Spacer />
        <HStack display={{ base: "none", md: "flex" }} spacing={3}>
          {children.find((child) => child.type === EndLinks)?.props.children}
        </HStack>
        <IconButton
          display={{ base: "flex", md: "none" }}
          size="sm"
          aria-label="Open menu"
          fontSize="20px"
          variant="ghost"
          onClick={mobileNav.onOpen}
          icon={<FaBars />}
        />
        <Box display={{ base: "none", md: "block" }}>
          <WalletConnect />
        </Box>

        <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
          <Stack spacing={2}>
            <Flex>
              {children.find((child) => child.type === Brand)?.props.children}
            </Flex>
            <Stack>
              {children.find((child) => child.type === Links)?.props.children}
            </Stack>
            <Divider />
            <Stack>
              {
                children.find((child) => child.type === EndLinks)?.props
                  .children
              }
            </Stack>
          </Stack>
        </MobileNavContent>
      </Flex>
    </Box>
  );
}

const Brand: React.FC = () => null;
const Links: React.FC = () => null;
const EndLinks: React.FC = () => null;

const Navbar = Object.assign(Template, { Brand, Links, EndLinks });
