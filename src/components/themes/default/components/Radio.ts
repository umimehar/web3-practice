const Radio = {
  parts: ["container", "control", "label"],
  baseStyle: {
    control: {
      bg: "none",
      boxSizing: "border-box",
      borderWidth: "1px",
      minHeight: "sm", // setting height alone does not work for some reason
      height: "sm",
      width: "sm",
      _checked: {
        bg: "none",
        borderWidth: "2px",
        _before: {
          content: `""`,
          display: "inline-block",
          pos: "relative",
          height: "xs",
          width: "xs",
          bg: "primary.500",
          borderRadius: "full",
        },
        _disabled: {
          bg: "neutral.200",
          borderColor: "neutral.600",
          borderWidth: "1px",
          cursor: "not-allowed",
          _before: {
            bg: "neutral.600",
          },
          _hover: {
            borderColor: "neutral.600",
          },
        },
        _focus: {
          bg: "none",
          borderColor: "primary.500",
        },
        _hover: {
          bg: "none",
          borderColor: "primary.500",
        },
      },
      _disabled: {
        bg: "neutral.200",
        borderColor: "neutral.600",
        cursor: "not-allowed",
        _hover: {
          borderColor: "neutral.600",
        },
      },
      _focus: {
        bg: "neutral.200",
        borderColor: "neutral.800",
      },
      _hover: {
        bg: "neutral.200",
        borderColor: "neutral.800",
      },
    },
    label: {
      color: "text.primary",
      marginLeft: "lg",
    },
  },
};

export default Radio;
