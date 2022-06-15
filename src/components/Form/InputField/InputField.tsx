import React, { HTMLInputTypeAttribute } from "react";
import { useFormContext, get } from "react-hook-form";

import { FormControl, FormLabel } from "../../FormControl";
import { Input, InputProps } from "../../Input";
import { Flex, FormErrorMessage, Text } from "@chakra-ui/react";

type LabelSecondaryAction = {
  onSecondaryActionClick?: () => void;
  text: string;
};

export interface InputFieldProps extends InputProps {
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  secondaryAction?: LabelSecondaryAction;
}

const InputField = ({
  label,
  name,
  type = "text",
  value,
  isRequired = false,
  secondaryAction,
  ...rest
}: InputFieldProps): React.ReactElement => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const localErr = errors[name];

  return (
    <FormControl
      label={label}
      isInvalid={!!get(errors, name, undefined)}
      isRequired={isRequired}
    >
      {label && (
        <Flex justify={"space-between"} pb={"md"}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          {secondaryAction && (
            <Text
              fontSize="lg"
              fontWeight={"medium"}
              color="primary.500"
              onClick={secondaryAction.onSecondaryActionClick}
              cursor="pointer"
            >
              {secondaryAction.text}
            </Text>
          )}
        </Flex>
      )}
      <Input
        fontSize={"md"}
        onKeyPress={(e) => {
          const updatedValue = (e.target as any).value;
          if (
            (updatedValue[updatedValue.length - 1] === " " &&
              e.code === "Space") ||
            updatedValue[0] === " "
          ) {
            setValue(name, (e.target as any).value.trim());
          }
        }}
        id={name}
        type={type}
        defaultValue={value}
        {...register(name)}
        {...rest}
      />
      {localErr && <FormErrorMessage>{localErr.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
