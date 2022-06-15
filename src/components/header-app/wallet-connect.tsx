import {
  Flex,
  Button,
  Box,
  HStack,
  IconButton,
  Text,
  VStack,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuth } from "src/context/AuthContext";
import { VscDebugDisconnect } from "react-icons/Vsc";

export function WalletConnect() {
  const { user, login, logout, walletAddresses, isLoading } = useAuth();
  const { onCopy, hasCopied } = useClipboard(walletAddresses[0]);
  const toast = useToast();

  useEffect(() => {
    if (!hasCopied) return;
    toast({
      title: `Wallet Address Copied.`,
      status: "success",
      isClosable: true,
    });
  }, [hasCopied]);

  return (
    <Box>
      {walletAddresses.length > 0 ? (
        <HStack>
          <VStack spacing={"none"}>
            <HStack spacing={"sm"}>
              <Text>Connected as </Text>
              <Tooltip label={walletAddresses[0]} hasArrow>
                <Text w={"100px"} noOfLines={1} onClick={onCopy}>
                  {walletAddresses[0].substring(0, 5)}...
                  {walletAddresses[0].substring(walletAddresses[0].length - 4)}
                </Text>
              </Tooltip>
            </HStack>
            <HStack>{user && <Text>{(user as any).email}</Text>}</HStack>
          </VStack>
          <IconButton
            aria-label={"disconnect"}
            onClick={logout}
            size={"sm"}
            variant="outline"
          >
            <VscDebugDisconnect fontSize={"20px"} />
          </IconButton>
        </HStack>
      ) : (
        <Button
          size={"sm"}
          onClick={login}
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Connect
        </Button>
      )}
    </Box>
  );
}
