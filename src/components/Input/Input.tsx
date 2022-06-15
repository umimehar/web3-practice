import React from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export type { InputProps };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref): React.ReactElement => {
    return (
      <ChakraInput
        ref={ref}
        borderColor="neutral.600"
        borderRadius="sm"
        borderWidth="0.5px"
        boxShadow="0px 0.5px 1px rgba(0, 0, 0, 0.1)"
        py="md"
        px="lg"
        _hover={{
          borderColor: "neutral.800",
        }}
        _focus={{
          borderColor: "primary.400",
        }}
        _invalid={{
          borderColor: "feedback.error",
          bg: "feedback.errorField",
          color: "feedback.errorText",
        }}
        _disabled={{
          bg: "neutral.200",
          borderColor: "neutral.600",
          color: "text.disabled",
          cursor: "not-allowed",
        }}
        {...props}
      />
    );
  }
);

export default Input;
