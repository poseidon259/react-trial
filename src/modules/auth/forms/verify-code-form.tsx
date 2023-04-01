import React from "react";
import { VStack, Text, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useLocation, Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutationVerifyCode } from "../api/verify-code.api";
import { CustomInput } from "~/components";
import { navigationFn } from "~/routes";
import { VerifyPinCodeFormSchema } from "~/validations";

type TVerifyCode = {
  email: string;
  code: string;
};

export const VerifyCodeForm = () => {
  const { state } = useLocation();

  const initialValues = {
    email: state.email,
    code: "",
  } as TVerifyCode;

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TVerifyCode>({
    defaultValues: initialValues,
    resolver: zodResolver(VerifyPinCodeFormSchema),
  });

  const { mutate } = useMutationVerifyCode(state.email, getValues("code"));

  const onSubmit = (data: TVerifyCode) => mutate(getValues());

  return state?.email ? (
    <VStack
      as="form"
      w="min(100%, 700px)"
      spacing={8}
      p="60px 16px"
      borderRadius={8}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text variant="headingLight">Enter PinCode</Text>
      <Text variant="menuLabelLight">
        Enter 6-digits verification code we 've sent to {state.email}
      </Text>
      <Controller
        control={control}
        name="code"
        render={({ field }) => {
          return (
            <CustomInput
              {...field}
              placeholder="Enter verification code"
              type="number"
            />
          );
        }}
      />
      {errors.code && <Text variant="error">{errors.code?.message}</Text>}
      <Button
        w="100%"
        type="submit"
        isDisabled={!isValid}
        isLoading={isSubmitting}
      >
        Verify
      </Button>
      <ChakraLink variant="whiteUnderline" as={Link} to={navigationFn.LOGIN}>
        Back to Login
      </ChakraLink>
    </VStack>
  ) : (
    <Navigate to={navigationFn.LOGIN} />
  );
};
