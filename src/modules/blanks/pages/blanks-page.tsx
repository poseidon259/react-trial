import React from "react";
import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Icons } from "~/assets";
import { navigationFn } from "~/routes";

export const BlankPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goToHome = () => navigate(navigationFn.HOME);

  return (
    <Center w="100vw" h="100vh" bg="grey.100" p={8}>
      <Center
        w="min(400px, 100%)"
        bg="white"
        boxShadow="0 0 2px 4px #FFB0B0"
        rounded="md"
        style={{
          aspectRatio: "1/1",
        }}
      >
        <Center>
          <VStack p={8} spacing={4}>
            <Text variant="blankHeading">404</Text>
            <Text variant="notFoundText">This page will be coming soon</Text>
            <Button leftIcon={<ArrowBackIcon />} onClick={goBack}>
              Go back
            </Button>
            <Button
              variant="goToHome"
              leftIcon={<Icons.logoPrimary h={28} w={28} color="white" />}
              onClick={goToHome}
            >
              Go to home page
            </Button>
          </VStack>
        </Center>
      </Center>
    </Center>
  );
};
