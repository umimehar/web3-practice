const Toast = {
  baseStyle: {
    borderRadius: "md",
    color: "text.primary",
    fontSize: "lg",
    lineHeight: "short",
    padding: "xl",
  },
  variants: {
    default: {
      bg: "neutral.200",
    },
    info: {
      bg: "primary.100",
    },
    success: {
      bg: "feedback.successLight",
    },
    warning: {
      bg: "feedback.warningLight",
    },
    error: {
      bg: "feedback.errorLight",
    },
  },
  defaultProps: {
    variant: "default",
  },
};

export type ToastVariants = keyof typeof Toast["variants"];

export default Toast;
