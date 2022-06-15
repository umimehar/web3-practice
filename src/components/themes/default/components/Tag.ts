const Tag = {
  parts: ["container", "label", "closeButton"],
  baseStyle: {
    container: {
      fontWeight: "regular",
      letterSpacing: "base",
    },
    label: {
      lineHeight: { base: "20px", md: "base" },
    },
  },
  sizes: {
    md: {
      container: {
        borderRadius: "sm",
        fontSize: { base: "lg", md: "md" },
        px: "xl",
        py: "md",
      },
    },
  },
  variants: {
    default: {
      container: {
        bg: "neutral.400",
        color: "text.primary",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "default",
  },
};

export default Tag;
