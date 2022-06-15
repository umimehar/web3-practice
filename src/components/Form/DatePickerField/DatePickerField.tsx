import React from "react";
import { useFormContext, Controller, get } from "react-hook-form";

import { FormControl, FormLabel } from "../../FormControl";
import { DatePicker } from "../../DatePicker";
import { FormErrorMessage } from "@chakra-ui/react";

export interface DatePickerFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  value?: Date;
  onlyOpenCalenderOnIconClick?: boolean;
}

const DatePickerField = ({
  label,
  name,
  value,
  placeholder = "Select a date...",
  isDisabled = false,
  isRequired = false,
  onlyOpenCalenderOnIconClick = false,
}: DatePickerFieldProps): React.ReactElement => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const localErr = errors[name];

  return (
    <FormControl
      label={label}
      isInvalid={!!get(errors, name, undefined)}
      isRequired={isRequired}
    >
      {label && (
        <FormLabel
          color={"secondary.900"}
          fontSize={"lg"}
          fontWeight={"600"}
          htmlFor={name}
        >
          {label}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={value}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            name={name}
            id={name}
            selected={value ? new Date(value) : null}
            onChange={(value: Date) => onChange(value)}
            onSelect={(value: Date) => onChange(value)}
            placeholderText={placeholder}
            disabled={isDisabled}
            inputProps={{
              isInvalid: errors?.[name],
            }}
            onlyOpenCalenderOnIconClick={onlyOpenCalenderOnIconClick}
          />
        )}
      />
      {localErr && <FormErrorMessage>{localErr.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default DatePickerField;
