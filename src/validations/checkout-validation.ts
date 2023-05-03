import { z } from 'zod'

export const DeliveryFormSchema = z.object({
  first_name: z
    .string({
      required_error: 'First name is required',
      invalid_type_error: 'Invalid first name'
    })
    .trim()
    .min(1, {
      message: 'The first name field can only enter more than 1 characters'
    })
    .max(100, {
      message: 'The first name field can only enter less than 100 characters'
    }),
  last_name: z
    .string({
      required_error: 'Last name is required',
      invalid_type_error: 'Invalid last name'
    })
    .trim()
    .min(1, {
      message: 'The last name field can only enter more than 1 characters'
    })
    .max(100, {
      message: 'The last name field can only enter less than 100 characters'
    }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid email'
    })
    .trim()
    .max(100, {
      message: 'The email field can only enter less than 100 characters'
    })
    .email(),
  phone_number: z
    .string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Invalid phone number'
    })
    .trim()
    .regex(/^\d+$/, {
      message: 'The phone number field can only enter numbers'
    })
    .min(10, {
      message: 'The phone number field can only enter more than 10 characters'
    })
    .max(11, {
      message: 'The phone number field can only enter less than 11 characters'
    }),
  house_number: z
    .string({
      required_error: 'Address is required',
      invalid_type_error: 'Invalid address'
    })
    .trim()
    .min(1, {
      message: 'The address field can only enter more than 1 characters'
    })
    .max(255, {
      message: 'The address field can only enter less than 255 characters'
    }),
  province_id: z
    .string({
      required_error: 'Province is required',
      invalid_type_error: 'Invalid province'
    })
    .trim()
    .min(1, {
      message: 'The province field can only enter more than 1 characters'
    }),
  district_id: z
    .string({
      required_error: 'District is required',
      invalid_type_error: 'Invalid district'
    })
    .trim()
    .min(1, {
      message: 'The district field can only enter more than 1 characters'
    }),
  ward_id: z
    .string({
      required_error: 'Ward is required',
      invalid_type_error: 'Invalid ward'
    })
    .trim()
    .min(1, {
      message: 'The ward field can only enter more than 1 characters'
    }),
  note: z
    .string({
      required_error: 'Note is required',
      invalid_type_error: 'Invalid note'
    })
    .trim()
    .max(3000, {
      message: 'The note field can only enter less than 3000 characters'
    })
})

export const CODFormSchema = z.object({
  payment_method: z
    .string({
      required_error: 'Payment method is required',
      invalid_type_error: 'Invalid payment method'
    })
    .trim()
    .min(1, {
      message: 'Vui lòng chọn phương thức thanh toán'
    })
})

export const CardFormSchema = z.object({
  payment_method: z
    .string({
      required_error: 'Payment method is required',
      invalid_type_error: 'Invalid payment method'
    })
    .trim()
    .min(1, {
      message: 'Vui lòng chọn phương thức thanh toán'
    })
})

export const VNpayFormSchema = z.object({
  payment_method: z
    .string({
      required_error: 'Payment method is required',
      invalid_type_error: 'Invalid payment method'
    })
    .trim()
    .min(1, {
      message: 'Vui lòng chọn phương thức thanh toán'
    }),
  payment_note: z
    .string({
      required_error: 'Payment note is required',
      invalid_type_error: 'Invalid payment note'
    })
    .trim()
    .max(100, {
      message: 'Nội dung thanh toán không được vượt quá 100 ký tự'
    })
})
