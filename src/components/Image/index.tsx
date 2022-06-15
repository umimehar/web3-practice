import type { BoxProps } from "@chakra-ui/react";
import NextImage from "next/image";
import { Box } from "@chakra-ui/react";

export const Image = ({
  src,
  alt,
  ...rest
}: { src: string; alt: string } & Omit<BoxProps, "as">) => {
  return (
    <Box position="relative" {...rest}>
      <NextImage
        objectFit="cover"
        layout="fill"
        src={src}
        alt={alt}
        rounded={"lg"}
      />
    </Box>
  );
};
