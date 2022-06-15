const Tabs = {
  parts: ["root", "tablist", "tab", "tabpanels", "tabpanel", "indicator"],
  baseStyle: {
    tab: {
      letterSpacing: "base",
      lineHeight: "short",
      _disabled: {
        color: "text.disabled",
        cursor: "not-allowed",
      },
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: "lg",
        px: "none",
        py: "md",
        _notLast: {
          mr: "3xl",
        },
      },
      tabpanel: {
        px: "none",
        py: "2xl",
      },
    },
  },
  variants: {
    default: {
      tab: {
        borderBottom: "2px solid",
        borderColor: "transparent",
        _selected: {
          borderColor: "primary.500",
          color: "primary.500",
        },
      },
    },
    rounded: {
      tab: {
        borderRadius: "full",
        bg: "neutral.400",
        color: "text.secondary",
        fontWeight: "bold",
        px: "xl",
        py: "md",
        _notLast: {
          mr: "md",
        },
        _selected: {
          bg: "primary.500",
          color: "neutral.white",
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "default",
  },
};

export type TabsVariants = keyof typeof Tabs["variants"];

export default Tabs;
