import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

export const LoadingOverlay = () => {
  return (
    <Center
      w="100%"
      h="100%"
      pos="absolute"
      top="100px"
      left={0}
      bgColor="#a5a2a218"
      zIndex="99"
    >
      <Spinner size="xl" color="primaryDark" />
    </Center>
  );
};
