import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../themes/default";

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactElement => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
