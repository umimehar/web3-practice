import React from "react";
import { useFormContext } from "react-hook-form";
import { Button, ButtonProps } from "@chakra-ui/react";

export interface SubmitButtonFieldProps extends ButtonProps {}

const SubmitButtonField = ({
  children,
  disabled,
  isLoading,
  ...rest
}: SubmitButtonFieldProps): React.ReactElement => {
  const {
    formState: { isDirty, isSubmitting },
  } = useFormContext();

  return (
    <Button
      type={"submit"}
      isDisabled={!isDirty || disabled || isSubmitting}
      isLoading={isLoading || isSubmitting}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SubmitButtonField;
