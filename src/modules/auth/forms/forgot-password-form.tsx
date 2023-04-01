import React from "react";
import {
  Box,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import { EmailIcon } from "@chakra-ui/icons";
import { useMutationForgotPassword } from "../api";
import { ForgotPasswordFormSchema } from "~/validations";
import { CustomInput } from "~/components";
import { navigationFn } from "~/routes";
import colors from "~/libs/chakra/foundations/colors";

type TForgot = {
  email: string;
};

const initialValues = {
  email: "",
} as TForgot;

export const ForgotPasswordform = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, isValid },
    getValues,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(ForgotPasswordFormSchema),
  });

  const { mutate } = useMutationForgotPassword(getValues());

  const onSubmit = (data: TForgot) => {
    mutate(data);
  };

  return (
    <VStack
      as="form"
      w="min(100%, 700px)"
      spacing={8}
      p="60px 16px"
      borderRadius={8}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text variant="headingLight">Forgot password</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Box w="100%">
            <Text variant="menuLabelLight" paddingBottom={4}>
              Email{" "}
              <Text as="span" color="white">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput
                value={value}
                onChange={(e) => onChange(e.target.value.trim())}
                placeholder="Enter your email"
                isInvalid={!!errors.email}
              />
              <InputRightElement>
                <Icon as={EmailIcon} color={colors.primary} />
              </InputRightElement>
            </InputGroup>
            {errors.email && (
              <Text variant="error">{errors.email.message}</Text>
            )}
          </Box>
        )}
      />
      <Button
        type="submit"
        isLoading={isSubmitting}
        w="100%"
        isDisabled={!isValid}
      >
        Send code via email
      </Button>
      <ChakraLink to={navigationFn.LOGIN} as={Link} variant="whiteUnderline">
        Back to login
      </ChakraLink>
    </VStack>
  );
};
