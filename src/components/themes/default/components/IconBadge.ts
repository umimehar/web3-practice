const IconBadge = {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sizes: {
    sm: {
      height: "24px",
      width: "24px",
      borderRadius: "6px",
    },
    md: {
      height: "32px",
      width: "32px",
      borderRadius: "md",
    },
    lg: {
      height: "56px",
      width: "56px",
      borderRadius: "lg",
    },
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
    size: "md",
    variant: "info",
  },
};

export type IconBadgeSizes = keyof typeof IconBadge["sizes"];
export type IconBadgeVariants = keyof typeof IconBadge["variants"];

export default IconBadge;
