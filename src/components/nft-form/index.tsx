import {
  Flex,
  Stack,
  Heading,
  HStack,
  VStack,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { nftFormValidationSchema } from "./validation";
import { Form } from "../Form/Form";
import React from "react";
import { InputField } from "../Form/InputField";
import SubmitButtonField from "../Form/SubmitButtonField/SubmitButtonField";
import { yupResolver } from "@hookform/resolvers/yup";

export type ProfileFormProps<TParams> = {
  initialValues?: Record<string, unknown>;
  onSubmit: any;
};

const NftForm = <
  TParams extends Record<string, unknown> = Record<string, unknown>
>({
  initialValues,
  onSubmit,
}: ProfileFormProps<TParams>) => {
  const methods = useForm({
    defaultValues: initialValues as any,
    resolver: yupResolver(nftFormValidationSchema),
  });
  const { reset, handleSubmit } = methods;

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit(async (data: any) => {
        await onSubmit(data);
        reset(data);
      })}
      initialValues={initialValues}
      validationSchema={nftFormValidationSchema}
    >
      <VStack spacing={"4xl"}>
        <Flex direction={"column"} w={"full"}>
          <Heading
            fontFamily={"Silka, sans-serif"}
            variant={"h3"}
            color={"primaryBlue.800"}
            mb={6}
          >
            Meta Data
          </Heading>
          <VStack spacing="2xl">
            <Stack
              direction={{ base: "column", lg: "row" }}
              w={"full"}
              spacing="2xl"
            >
              <InputField label="Name" name="name" type="text" isRequired />
              <InputField
                label="Description"
                name="description"
                type="text"
                isRequired
              />
            </Stack>
            <Stack
              direction={{ base: "column", lg: "row" }}
              w={"full"}
              spacing="2xl"
            >
              <InputField label="Text" name="text" />
            </Stack>
          </VStack>
        </Flex>

        <HStack justifyContent={"flex-start"} w={"full"}>
          <SubmitButtonField
            _disabled={{ cursor: "auto" }}
            colorScheme={"primary"}
            fontSize={"md"}
            borderRadius={"23px"}
          >
            Claim
          </SubmitButtonField>
        </HStack>
      </VStack>
      <HStack alignItems={"self-start"} w={"full"}>
        <Box w={"full"}>{/*<Alert {...alertState} />*/}</Box>
      </HStack>
    </Form>
  );
};

export default NftForm;
