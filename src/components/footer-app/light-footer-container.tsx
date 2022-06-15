import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BaseLink } from "@components/base/base-link";

export function LightFooterContainer() {
  const year = new Date().getFullYear();
  return (
    <>
      <Box as="footer" bg={"white"}>
        <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" py={6}>
          <Flex direction={{ base: "column", md: "row" }} mx="auto">
            <Stack
              my={{ base: "6", md: 0 }}
              direction={{ base: "column", md: "row" }}
              marginStart={{ md: "8" }}
              fontSize="sm"
              spacing={{ base: "2", md: "8" }}
              textAlign={{ base: "center", md: "start" }}
            >
              <Text>&copy; {year} Web3, All rights reserved.</Text>
              <BaseLink route={"privacy-policy"}>Privacy Policy</BaseLink>
              <BaseLink route={"terms-of-service"}>Terms of Service</BaseLink>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
