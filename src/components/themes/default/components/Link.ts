const Link = {
  baseStyle: {},
  variants: {
    "no-underline": {
      _focus: {
        textDecoration: "none",
      },
      _hover: {
        textDecoration: "none",
      },
    },
  },
  defaultProps: {
    size: "default",
    variant: "primary",
  },
};

export type LinkVariants = keyof typeof Link["variants"];

export default Link;
