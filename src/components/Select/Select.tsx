import React from "react";
import ReactSelect, { components, Props, StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";
import { useTheme } from "@chakra-ui/react";

// TODO: use proper typing for custom components

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator {...props}>
      {/*<Icon icon="close-circle" boxSize="sm" />*/}
    </components.ClearIndicator>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      {/*<Icon icon="drop-down" boxSize="sm" />*/}
    </components.DropdownIndicator>
  );
};

export interface SelectProps extends Props {
  noSeparator?: boolean;
  isInvalid?: boolean;
  isCreatable?: boolean;
  isAsync?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Select = React.forwardRef<any, SelectProps>(
  (
    {
      styles,
      components,
      isInvalid,
      isCreatable,
      isAsync,
      noSeparator = false,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const baseStyles: StylesConfig<any, false> = {
      control: (base, state) => ({
        ...base,
        borderColor: state.isDisabled
          ? theme.colors.neutral[600]
          : isInvalid
          ? theme.colors.feedback.error
          : state.isFocused
          ? theme.colors.primary[400]
          : theme.colors.neutral[600],
        borderRadius: theme.radii.sm,
        borderWidth: "0.5px",
        boxShadow: "0px 0.5px 1px rgba(0, 0, 0, 0.1)",
        ":hover": {
          borderColor: isInvalid
            ? theme.colors.feedback.error
            : state.isFocused
            ? theme.colors.primary[400]
            : theme.colors.neutral[800],
        },
        background: isInvalid ? theme.colors.feedback.errorField : "none",
      }),
      clearIndicator: (base) => ({
        ...base,
        color: theme.colors.neutral.black,
        cursor: "pointer",
      }),
      indicatorSeparator: (base) => ({
        ...(!noSeparator && base),
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: theme.colors.neutral[800],
        cursor: "pointer",
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
          ? theme.colors.primary[400]
          : state.isFocused
          ? theme.colors.neutral[200]
          : "transparent",
        color: state.isDisabled
          ? theme.colors.neutral[600]
          : state.isSelected
          ? theme.colors.neutral.white
          : theme.colors.neutral.black,
        ":active": {},
      }),
      placeholder: (base) => ({
        ...base,
        color: theme.colors.neutral[600],
      }),
    };

    const props = {
      ref,
      styles: {
        ...baseStyles,
        ...styles,
      },
      components: {
        ClearIndicator,
        DropdownIndicator,
        ...components,
      },
      ...rest,
    };

    return isAsync ? (
      <AsyncSelect defaultOptions {...props} />
    ) : isCreatable ? (
      <CreatableSelect {...props} />
    ) : (
      <ReactSelect {...props} />
    );
  }
);

export default Select;
