import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export default function NFTLoader() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={0}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"330px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundColor: "black",
            // backgroundImage: `url(${url})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          // _groupHover={{
          //   _after: {
          //     filter: "blur(20px)",
          //   },
          // }}
        >
          <Skeleton rounded={"lg"} height={330} width={282} />
        </Box>
        <Stack pt={10} align={"center"}>
          <SkeletonText w={"150px"} noOfLines={1} />
          <SkeletonText w={"250px"} noOfLines={1} />
          <Stack direction={"row"} align={"center"}>
            <Skeleton w={"80px"} noOfLines={1} height={"20px"} />
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
