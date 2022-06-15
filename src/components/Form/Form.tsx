import React, { useEffect } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";

export interface FormProps<FormValuesType> {
  initialValues?: Record<string, unknown>;
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormValuesType | any>;
  validationSchema?: AnyObjectSchema;
  apiError?: unknown;
  methods?: UseFormReturn;
}

export const Form = <
  T extends Record<string, unknown> = Record<string, unknown>
>({
  initialValues,
  children,
  onSubmit,
  validationSchema,
  apiError,
  methods,
}: FormProps<T>): JSX.Element => {
  const localMethods = useForm({
    defaultValues: initialValues,
    ...(validationSchema && { resolver: yupResolver(validationSchema) }),
  });

  methods = methods ?? localMethods;

  // useEffect(() => {
  // const serverError = apiError as Record<string, unknown>;
  // if (Array.isArray(serverError?.details) && serverError?.responseType === 'form' && methods) {
  //   serverError.details.forEach(error => {
  //     const { key, message } = error;
  //     methods?.setError(key, { type: 'focus', message });
  //   });
  // }
  // }, [apiError, methods]);

  return (
    <FormProvider {...methods}>
      <form
        noValidate={true}
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<any>)}
      >
        {/*todo: fix ts here later*/}
        {children}
      </form>
    </FormProvider>
  );
};
