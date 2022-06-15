import React from "react";
import { useFormContext, Controller, get } from "react-hook-form";
import { FormControl, FormLabel } from "../../FormControl";
import { Select, SelectProps } from "../../Select";
import { FormErrorMessage } from "@chakra-ui/react";
import { createFilter } from "react-select";

type SelectOption = {
  value: string | boolean | number;
  label: string;
};
export interface SelectFieldProps extends Omit<SelectProps, "isMulti"> {
  label?: string;
  name: string;
  value?: SelectOption;
  options: SelectOption[];
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isMulti?: boolean;
}

const SelectField = ({
  label,
  name,
  value,
  options,
  placeholder,
  isMulti,
  isRequired,
  ...rest
}: SelectFieldProps): React.ReactElement => {
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
        render={({ field: { onChange, value, ref } }) => (
          <Select
            filterOption={createFilter({ ignoreAccents: false })}
            inputRef={ref}
            options={options}
            value={value}
            onChange={(value: SelectOption["value"]) => onChange(value)}
            isInvalid={errors?.[name]}
            placeholder={placeholder}
            isMulti={isMulti}
            noSeparator
            {...rest}
          />
        )}
      />
      {localErr && <FormErrorMessage>{localErr.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default SelectField;
