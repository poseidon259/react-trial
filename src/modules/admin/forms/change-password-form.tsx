import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

// import { CustomPasswordInput } from "@/components";
// import { getStoredUser } from "@/helper";
// import { ChangePasswordFormSchema } from "@/validations";
// import { useMutationChangePassword } from "../api";

type TChangePasswordForm = {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const ChangePasswordForm = () => {
  // const adminEmail = getStoredUser()?.data?.email;

  const initialValues = {
    // email: adminEmail,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  } as TChangePasswordForm;

  // const {
  //   handleSubmit,
  //   control,
  //   formState: { isSubmitting, errors },
  // } = useForm<TChangePasswordForm>({
  //   defaultValues: initialValues,
  //   resolver: zodResolver(ChangePasswordFormSchema),
  // });

  // const { mutate } = useMutationChangePassword();

  // const onSubmit = (data: TChangePasswordForm) => mutate(data);

  return (
    <Box p={8} rounded="md" bgColor="white">
      <Text variant="heading">Change password</Text>
      {/* <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={8} py={8}>
        <Controller
          name="oldPassword"
          control={control}
          render={({ field }) => (
            <Box w="100%">
              <Text variant="menuLabel" paddingBottom={4}>
                Current password{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <CustomPasswordInput
                {...field}
                placeholder="Enter your current password"
                isInvalid={!!errors.oldPassword}
                min={4}
                max={32}
              />
              {errors.oldPassword && (
                <Text variant="error">{errors.oldPassword.message}</Text>
              )}
            </Box>
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <Box w="100%">
              <Text variant="menuLabel" paddingBottom={4}>
                New password{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <CustomPasswordInput
                {...field}
                placeholder="Enter your new password"
                isInvalid={!!errors.newPassword}
                min={4}
                max={32}
              />
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
              <Text variant="menuLabel" paddingBottom={4}>
                Confirm password{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <CustomPasswordInput
                {...field}
                placeholder="Confirm your password"
                isInvalid={!!errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <Text variant="error">{errors.confirmPassword.message}</Text>
              )}
            </Box>
          )}
        />
        <Button type="submit" isLoading={isSubmitting} w="100%">
          Update
        </Button>
      </VStack> */}
    </Box>
  );
};
