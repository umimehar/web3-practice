const Checkbox = {
  parts: ["container", "control", "label", "icon"],
  baseStyle: {
    control: {
      border: "1px",
      borderRadius: "sm",
      borderColor: "inherit",
      _checked: {
        bg: "primary.500",
        borderColor: "primary.500",
        color: "neutral.white",
        _hover: {
          bg: "primary.500",
          borderColor: "primary.500",
        },
        _focus: {
          bg: "primary.500",
          borderColor: "primary.500",
        },
        _disabled: {
          bg: "neutral.200",
          borderColor: "neutral.600",
          color: "neutral.600",
        },
      },
      _indeterminate: {
        bg: "primary.500",
        borderColor: "primary.500",
        color: "neutral.white",
      },
      _disabled: {
        bg: "neutral.200",
        borderColor: "neutral.600",
      },
      _focus: {
        boxShadow: "none",
        bg: "neutral.200",
        borderColor: "neutral.800",
      },
      _invalid: {
        bg: "feedback.errorField",
        borderColor: "feedback.error",
      },
    },
    label: {
      _disabled: {
        color: "neutral.600",
        opacity: "initial",
      },
    },
  },
  sizes: {
    md: {
      control: {
        height: "16px",
        width: "16px",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Checkbox;
