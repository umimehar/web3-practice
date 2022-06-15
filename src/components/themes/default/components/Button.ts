const Button = {
  baseStyle: {
    borderRadius: "sm",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: "x3",
    "&[disabled]": {
      bg: "neutral.200",
      color: "neutral.600",
      opacity: "initial",
    },
    "&:hover[disabled]": {
      bg: "neutral.200",
    },
  },
  sizes: {
    default: {
      px: "2xl",
      py: ["xl", null, "lg"],
    },
  },
  variants: {
    primary: {
      bg: "primary.500",
      color: "neutral.white",
      _focus: {
        bg: "primary.400",
        borderColor: "primary.500",
      },
      _hover: {
        bg: "primary.400",
      },
    },
    secondaryLight: {
      bg: "neutral.200",
      color: "primary.600",
      _focus: {
        bg: "neutral.400",
        borderColor: "neutral.600",
      },
      _hover: {
        bg: "neutral.400",
      },
    },
    secondaryDark: {
      bg: "neutral.900",
      color: "neutral.white",
      _focus: {
        bg: "neutral.800",
        borderColor: "neutral.900",
      },
      _hover: {
        bg: "neutral.800",
      },
      "&[disabled]": {
        bg: "neutral.900",
        color: "neutral.800",
        opacity: "initial",
      },
      "&:hover[disabled]": {
        bg: "neutral.900",
      },
    },
    plain: {
      bg: "neutral.white",
      color: "neutral.800",
      _hover: {
        bg: "neutral.200",
        color: "neutral.black",
      },
    },
    danger: {
      bg: "feedback.error",
      color: "neutral.white",
      _focus: {
        bg: "feedback.errorHover",
      },
      _hover: {
        bg: "feedback.errorHover",
      },
    },
  },
  defaultProps: {
    size: "default",
    variant: "primary",
  },
};

export type ButtonVariants = keyof typeof Button["variants"];

export default Button;
