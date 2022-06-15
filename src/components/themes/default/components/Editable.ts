const baseStyles = {
  position: "relative",
  top: "-1px",
  color: "neutral.black",
  borderRadius: "sm",
  width: "100%",
};

const Editable = {
  sizes: {
    xs: {
      preview: {
        ...baseStyles,
        paddingY: "xs",
        paddingX: "sm",
        fontSize: "xs",
        lineHeight: "none",
        letterSpacing: "base",
      },
      input: {
        ...baseStyles,
        paddingY: "xs",
        paddingX: "sm",
        fontSize: "xs",
        lineHeight: "none",
        letterSpacing: "base",
      },
    },
    sm: {
      preview: {
        ...baseStyles,
        paddingY: "sm",
        paddingX: "sm",
        fontSize: "sm",
        lineHeight: "small",
        letterSpacing: "base",
      },
      input: {
        ...baseStyles,
        paddingY: "sm",
        paddingX: "sm",
        fontSize: "sm",
        lineHeight: "small",
        letterSpacing: "base",
      },
    },
    md: {
      preview: {
        ...baseStyles,
        paddingY: "sm",
        paddingX: "md",
        fontSize: "md",
        letterSpacing: "wide",
        lineHeight: "base",
      },
      input: {
        ...baseStyles,
        paddingY: "sm",
        paddingX: "md",
        fontSize: "md",
        letterSpacing: "wide",
        lineHeight: "base",
      },
    },
  },
  variants: {
    inline: {
      preview: baseStyles,
      input: {
        ...baseStyles,
        "&:disabled": {
          background: "transparent",
        },
        "&:focus": {
          boxShadow: "none",
        },
      },
    },
    input: {
      preview: {
        ...baseStyles,
        _hover: {
          top: "-2px",
          left: "-1px",
          borderWidth: "0.5px",
          borderStyle: "solid",
          borderColor: "neutral.800",
          marginBottom: "-2px",
        },
      },
      input: {
        ...baseStyles,
        background: "primary.100",
        left: "-1px",
        "&:disabled": {
          background: "transparent",
        },
        "&:focus": {
          top: "-2px",
          marginBottom: "-2px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "primary.500",
          boxShadow: "none",
        },
      },
    },
    title: {
      preview: {
        ...baseStyles,
        padding: "lg",
        fontWeight: "bold",
      },
      input: {
        ...baseStyles,
        padding: "lg",
        fontWeight: "bold",
        "&:focus": {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "primary.400",
          boxShadow: "none",
          top: "-2px",
          left: "-1px",
          marginBottom: "-2px",
        },
      },
    },
    disabled: {
      preview: {
        ...baseStyles,
        background: "neutral.200",
        color: "neutral.800",
        _hover: {
          border: "none",
          cursor: "default",
        },
      },
      input: {
        ...baseStyles,
        background: "neutral.200",
        color: "neutral.800",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "input",
  },
};

export default Editable;
