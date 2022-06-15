const TextButton = {
  baseStyle: {
    bg: "none",
    _focus: {
      color: "primary.400",
    },
    _hover: {
      color: "primary.400",
    },
    "&[disabled]": {
      color: "neutral.600",
      opacity: "initial",
    },
    "&:hover[disabled]": {
      color: "neutral.600",
    },
  },
  sizes: {
    default: {
      px: "2xl",
      py: ["xl", null, "lg"],
    },
    sm: {
      px: "xl",
      fontSize: ["md", null, "sm"],
      lineHeight: ["base", null, "small"],
      letterSpacing: "base",
    },
  },
  variants: {
    primaryLight: {
      color: "primary.600",
    },
    primaryDark: {
      color: "neutral.white",
      "&[disabled]": {
        color: "neutral.800",
        opacity: "initial",
      },
      "&:hover[disabled]": {
        color: "neutral.800",
      },
    },
    secondary: {
      color: "neutral.800",
    },
    danger: {
      color: "feedback.errorText",
      _hover: {
        color: "feedback.errorHover",
      },
      _focus: {
        color: "feedback.errorHover",
      },
    },
  },
  defaultProps: {
    size: "default",
    variant: "primaryLight",
  },
};

export type TextButtonVariants = keyof typeof TextButton["variants"];

export default TextButton;
