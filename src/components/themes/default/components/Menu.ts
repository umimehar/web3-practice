const Menu = {
  parts: ["item", "command", "list", "button", "groupTitle", "divider"],
  baseStyle: {
    button: {
      fontSize: "md",
      letterSpacing: "base",
      lineHeight: "base",
    },
    list: {
      borderColor: "neutral.400",
      borderRadius: "md",
      borderWidth: "0.5px",
      boxShadow: "dropdown",
      color: "text.primary",

      // HACK: override focus-visible library to prevent boxShadow flicker
      "&:focus:not([data-focus-visible-added])": {
        boxShadow: "dropdown",
      },
    },
    item: {
      fontSize: "md",
      letterSpacing: "base",
      lineHeight: "base",
      px: "xl",
      py: "md",
      _focus: {
        bg: "neutral.200",
      },
      _active: {
        bg: "neutral.200",
      },
      _expanded: {
        bg: "neutral.200",
      },
    },
    groupTitle: {
      color: "text.secondary",
      fontSize: "xs",
      fontWeight: "bold",
      letterSpacing: "widest",
      lineHeight: "shortest",
      textTransform: "uppercase",
      px: "xl",
      py: "lg",
      margin: "none",
    },
    divider: {
      borderBottomWidth: "0.5px",
      borderColor: "neutral.600",
      my: "md",
    },
  },
};

export default Menu;
