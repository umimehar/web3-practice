const Text = {
  baseStyle: {
    fontFamily: "body",
    fontWeight: "regular",
    letterSpacing: "base",
    color: "text.primary",
  },
  sizes: {
    sm: {
      fontSize: ["md", null, "sm"],
      lineHeight: ["base", null, "small"],
    },
    md: {
      fontSize: ["lg", null, "md"],
      lineHeight: ["short", null, "base"],
    },
    lg: {
      fontSize: "5xl",
      letterSpacing: "normal",
      lineHeight: "50px",
    },
  },
  variants: {
    active: {
      color: "text.active",
    },
    secondary: {
      color: "text.secondary",
    },
    disabled: {
      color: "text.disabled",
    },
    smallCaps: {
      fontSize: "xs",
      fontWeight: "bold",
      letterSpacing: "widest",
      lineHeight: "smallCaps",
      textTransform: "uppercase",
    },
  },
  defaultProps: {
    size: "md",
  },
};

export default Text;
