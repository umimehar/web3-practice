import React from "react";
import { Slot } from "reactjs-slot-layout/dist";
import { Box, Flex } from "@chakra-ui/react";

export function TwoColumnLayout({ sections }: any) {
  return (
    <Box backgroundColor="gray.50" width="100%" minH="100vh">
      <Slot
        sections={sections}
        name="header"
        component="<>"
        className={"layout-header"}
      />
      <div className={"two-column-div"}>
        <Flex
          px={{ base: 4, md: 6, lg: 8 }}
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          direction={["column", "row"]}
          className={"two-column-flex"}
        >
          <Slot
            sections={sections}
            name="sidebar"
            component="<>"
            className={"layout-sidebar"}
          />
          <Box width={"full"}>
            <Slot
              sections={sections}
              name="content"
              component="<>"
              className={"layout-content"}
            />
          </Box>
        </Flex>
      </div>
      <Slot
        sections={sections}
        name="footer"
        component="<>"
        className={"layout-footer"}
      />
    </Box>
  );
}
