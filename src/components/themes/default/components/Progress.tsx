const Progress = {
  parts: ["track", "filledTrack"],
  baseStyle: {},
  variants: {
    success: {
      filledTrack: {
        backgroundColor: "feedback.success",
      },
    },
    warning: {
      filledTrack: {
        backgroundColor: "feedback.warning",
      },
    },
    error: {
      filledTrack: {
        backgroundColor: "feedback.error",
      },
    },
  },
};

export type ProgressVariants = keyof typeof Progress["variants"];

export default Progress;
