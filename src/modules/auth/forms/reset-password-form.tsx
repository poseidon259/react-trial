import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";

import { Navigate, useLocation } from "react-router-dom";
import { useMutationResetPassword } from "../api";
import { ResetPasswordFormSchema } from "~/validations";
import { CustomInput } from "~/components";
import { navigationFn } from "~/routes";

type TReset = {
  code: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
};

export const ResetPasswordForm = () => {
  const { state } = useLocation();

  const initialValues = {
    code: state.code,
    email: state.email || "",
    newPassword: "",
    confirmPassword: "",
  } as TReset;

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    getValues,
  } = useForm<TReset>({
    defaultValues: initialValues,
    resolver: zodResolver(ResetPasswordFormSchema),
  });

  const { mutate } = useMutationResetPassword();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);

  const onSubmit = () => {
    mutate(getValues());
  };

  return !state?.email || !state?.code ? (
    <Navigate to={navigationFn.LOGIN} replace />
  ) : (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="min(100%, 700px)"
      spacing={8}
      p="60px 16px"
      borderRadius={8}
    >
      <Text variant="headingLight">Reset password</Text>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Box w="100%">
            <Text variant="menuLabelLight" paddingBottom={4}>
              Email
            </Text>
            <InputGroup>
              <CustomInput {...field} isDisabled />
              <InputRightElement>
                <Icon as={EmailIcon} color="primary" />
              </InputRightElement>
            </InputGroup>
          </Box>
        )}
      />

      <Controller
        name="newPassword"
        control={control}
        render={({ field }) => (
          <Box w="100%">
            <Text variant="menuLabelLight" paddingBottom={4}>
              New password
              <Text as="span" color="white">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput
                {...field}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                isInvalid={!!errors.newPassword}
              />
              <InputRightElement>
                <Button bg="transparent" onClick={togglePassword}>
                  <Icon as={showPassword ? ViewOffIcon : ViewIcon} />
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.newPassword && (
              <Text variant="error">{errors.newPassword.message}</Text>
            )}
          </Box>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Box w="100%">
            <Text variant="menuLabelLight" paddingBottom={4}>
              Confirm password
              <Text as="span" color="white">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput
                {...field}
                placeholder="Confirm your password"
                type={showConfirm ? "text" : "password"}
                isInvalid={!!errors.confirmPassword}
              />
              <InputRightElement>
                <Button bg="transparent" onClick={toggleConfirm}>
                  <Icon as={showConfirm ? ViewOffIcon : ViewIcon} />
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.confirmPassword && (
              <Text variant="error">{errors.confirmPassword.message}</Text>
            )}
          </Box>
        )}
      />
      <Button isLoading={isSubmitting} type="submit" w="100%">
        Reset password
      </Button>
    </VStack>
  );
};
