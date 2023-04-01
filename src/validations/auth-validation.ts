import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid email",
    })
    .trim()
    .max(100, {
      message: "The email field can only enter less than 100 characters",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Invalid password",
    })
    .trim()
    .min(4, {
      message: "The password field can only enter more than 4 characters",
    })
    .max(32, {
      message: "The password field can only enter less than 32 characters",
    }),
});

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid email",
    })
    .trim()
    .max(48, {
      message: "Email max is 48",
    })
    .email(),
});

export const ResetPasswordFormSchema = z
  .object({
    code: z
      .string({
        required_error: "Code is required",
      })
      .length(6, {
        message: "Invalid Code",
      }),
    newPassword: z
      .string({
        required_error: "New password is required",
        invalid_type_error: "Invalid password",
      })
      .min(8, {
        message: "Password min is 8",
      }),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
        invalid_type_error: "Invalid password",
      })
      .min(8, {
        message: "Password min is 8",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export const ChangePasswordFormSchema = z
  .object({
    oldPassword: z
      .string({
        required_error: "New password is required",
        invalid_type_error: "Invalid password",
      })
      .trim()
      .min(4, {
        message: "The password field can only enter more than 4 characters",
      })
      .max(32, {
        message: "The password field can only enter less than 32 characters",
      }),
    newPassword: z
      .string({
        required_error: "New password is required",
        invalid_type_error: "Invalid password",
      })
      .trim()
      .min(4, {
        message: "The password field can only enter more than 4 characters",
      })
      .max(32, {
        message: "The password field can only enter less than 32 characters",
      }),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
        invalid_type_error: "Invalid password",
      })
      .trim()
      .min(4, {
        message: "The password field can only enter more than 4 characters",
      })
      .max(32, {
        message: "The password field can only enter less than 32 characters",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export const VerifyPinCodeFormSchema = z.object({
  code: z
    .string({
      required_error: "Pin code is required",
    })
    .length(6, {
      message: "Pin code must be 6 characters",
    }),
});
