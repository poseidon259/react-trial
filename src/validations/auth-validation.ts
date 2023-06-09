import { z } from 'zod'

export const UpdateQuantityCartFormSchema = z.object({
  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Invalid quantity'
    })
    .int()
    .min(1)
})

export const AddToCartNoFieldSchema = z.object({
  product_id: z
    .number({
      required_error: 'Product is required',
      invalid_type_error: 'Invalid product id'
    })
    .int(),
  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Invalid quantity'
    })
    .int()
    .min(1)
})

export const AddToCartFieldSchema = z.object({
  product_id: z
    .number({
      required_error: 'Product is required',
      invalid_type_error: 'Invalid product id'
    })
    .int(),
  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Invalid quantity'
    })
    .int()
    .min(1),
  child_master_field_id: z
    .string({
      required_error: 'Child master field id is required',
      invalid_type_error: 'Invalid child master field id'
    })
    .trim()
    .refine(
      (value) => {
        const numberValue = parseInt(value, 10)
        return !isNaN(numberValue) && Number.isInteger(numberValue) && numberValue >= 1
      },
      {
        message: 'Please select a valid option'
      }
    )
})

export const CommentFormClientSchema = z.object({
  content: z
    .string({
      required_error: 'Content is required',
      invalid_type_error: 'Invalid content'
    })
    .trim()
    .min(10, {
      message: 'The content field can only enter more than 10 characters'
    })
    .max(500, {
      message: 'The content field can only enter less than 500 characters'
    }),
  rating: z
    .number({
      required_error: 'Rating is required',
      invalid_type_error: 'Invalid rating'
    })
    .min(1, {
      message: 'The rating field can only enter more than 1 characters'
    })
    .max(5, {
      message: 'The rating field can only enter less than 5 characters'
    })
})

export const LoginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email không hợp lệ'
    })
    .trim()
    .max(100, {
      message: 'The email field can only enter less than 100 characters'
    })
    .email({
      message: 'Email không hợp lệ'
    }),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Invalid password'
    })
    .trim()
    .min(8, {
      message: 'Mật khẩu phải có ít nhất 8 ký tự'
    })
    .max(32, {
      message: 'Mật khẩu phải có ít hơn 32 ký tự'
    })
})

export const RegisterFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email không hợp lệ'
    })
    .trim()
    .max(100, {
      message: 'The email field can only enter less than 100 characters'
    })
    .email({
      message: 'Email không hợp lệ'
    }),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Invalid password'
    })
    .trim()
    .min(8, {
      message: 'Mật khẩu phải có ít nhất 8 ký tự'
    })
    .max(32, {
      message: 'Mật khẩu phải có ít hơn 32 ký tự'
    }),
  first_name: z
    .string({
      required_error: 'First name is required',
      invalid_type_error: 'Invalid first name'
    })
    .trim()
    .max(100, {
      message: 'The first name field can only enter less than 100 characters'
    }),
  last_name: z
    .string({
      required_error: 'Last name is required',
      invalid_type_error: 'Invalid last name'
    })
    .trim()
    .max(100, {
      message: 'The last name field can only enter less than 100 characters'
    })
})

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid email'
    })
    .trim()
    .max(48, {
      message: 'Email max is 48'
    })
    .email()
})

export const ResetPasswordFormSchema = z
  .object({
    code: z
      .string({
        required_error: 'Code is required'
      })
      .length(6, {
        message: 'Invalid Code'
      }),
    newPassword: z
      .string({
        required_error: 'New password is required',
        invalid_type_error: 'Invalid password'
      })
      .min(8, {
        message: 'Password min is 8'
      }),
    confirmPassword: z
      .string({
        required_error: 'Confirm password is required',
        invalid_type_error: 'Invalid password'
      })
      .min(8, {
        message: 'Password min is 8'
      })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPassword']
  })

export const ChangePasswordFormSchema = z
  .object({
    oldPassword: z
      .string({
        required_error: 'New password is required',
        invalid_type_error: 'Invalid password'
      })
      .trim()
      .min(4, {
        message: 'The password field can only enter more than 4 characters'
      })
      .max(32, {
        message: 'The password field can only enter less than 32 characters'
      }),
    newPassword: z
      .string({
        required_error: 'New password is required',
        invalid_type_error: 'Invalid password'
      })
      .trim()
      .min(4, {
        message: 'The password field can only enter more than 4 characters'
      })
      .max(32, {
        message: 'The password field can only enter less than 32 characters'
      }),
    confirmPassword: z
      .string({
        required_error: 'Confirm password is required',
        invalid_type_error: 'Invalid password'
      })
      .trim()
      .min(4, {
        message: 'The password field can only enter more than 4 characters'
      })
      .max(32, {
        message: 'The password field can only enter less than 32 characters'
      })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPassword']
  })

export const VerifyPinCodeFormSchema = z.object({
  code: z
    .string({
      required_error: 'Pin code is required'
    })
    .length(6, {
      message: 'Pin code must be 6 characters'
    })
})
