import React from "react";
import { Slot } from "reactjs-slot-layout/dist";
import { Box } from "@chakra-ui/react";

export function OneColumnLayout({ sections }: any) {
  return (
    <Box backgroundColor="gray.50" width="100%" minH="100vh" flex="1">
      <Slot sections={sections} name="header" component="<>" />
      <div className={"one-column-div"}>
        <Slot sections={sections} name="content" component="<>" />
      </div>
      <Slot sections={sections} name="footer" component="<>" />
    </Box>
  );
}
