const Heading = {
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
  },
  variants: {
    h1: {
      fontSize: ["3xl", null, "5xl"],
      lineHeight: ["shorter", null, "large"],
    },
    h2: {
      fontSize: ["3xl", null, "4xl"],
      fontWeight: ["regular", null, "bold"],
      lineHeight: ["shorter", null, "shortest"],
    },
    h3: {
      fontSize: ["xl", null, "3xl"],
      lineHeight: "shorter",
    },
    h4: {
      fontSize: "2xl",
      lineHeight: "shorter",
    },
    h5: {
      fontSize: "xl",
      lineHeight: "shorter",
    },
    h6: {
      fontSize: "lg",
      letterSpacing: "wide",
      lineHeight: "short",
    },
  },
  defaultProps: {
    variant: "h1",
  },
};

export type HeadingVariants = keyof typeof Heading["variants"];

export default Heading;
