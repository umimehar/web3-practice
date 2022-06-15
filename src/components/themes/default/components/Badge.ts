const Badge = {
  baseStyle: {
    borderRadius: "sm",
    paddingX: "6px",
    paddingY: "sm",
  },
  variants: {
    info: {
      backgroundColor: "neutral.200",
      color: "primary.600",
    },
    success: {
      backgroundColor: "feedback.successLight",
      color: "feedback.success",
    },
    warning: {
      backgroundColor: "feedback.warningLight",
      color: "feedback.warning",
    },
    error: {
      backgroundColor: "feedback.errorLight",
      color: "feedback.error",
    },
  },
  defaultProps: {
    variant: "info",
  },
};

export type BadgeVariants = keyof typeof Badge["variants"];

export default Badge;
