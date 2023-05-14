import { z } from 'zod'

const isFile = (value: any) => value instanceof File || value instanceof Blob

export const AddBrandFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Invalid name'
    })
    .trim()
    .min(4, {
      message: 'Tên thương hiệu phải có ít nhất 4 ký tự'
    })
    .max(100, {
      message: 'The name field can only contain less than 100 characters'
    }),
  image: z
    .any()
    .refine((value) => value !== undefined && value !== null && value !== '' && value.name !== 'default_2509', {
      message: 'Ảnh là bắt buộc'
    })
})

const ImageObjectSchema = z.any()

export const AddProductFormSchema = z
  .object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Invalid name'
      })
      .trim()
      .min(4, {
        message: 'Tên sản phẩm phải có ít nhất 4 ký tự'
      })
      .max(100, {
        message: 'The name field can only contain less than 100 characters'
      }),
    category_id: z
      .string({
        required_error: 'Category is required',
        invalid_type_error: 'Invalid category'
      })
      .trim()
      .min(1, {
        message: 'The category field must contain at least 1 character'
      }),
    description_detail: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Invalid description'
      })
      .trim()
      .max(3000, {
        message: 'Mô tả chi tiết sản phẩm không được vượt quá 3000 ký tự'
      }),
    description_list: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Invalid description'
      })
      .trim()
      .max(255, {
        message: 'Mô tả sản phẩm không được vượt quá 255 ký tự'
      }),
    status: z
      .string({
        required_error: 'Status is required',
        invalid_type_error: 'Invalid status'
      })
      .trim()
      .min(1, {
        message: 'Trạng thái sản phẩm là bắt buộc'
      }),
    stock: z
      .number({
        required_error: 'Tồn kho là bắt buộc',
        invalid_type_error: 'Tồn kho không hợp lệ'
      })
      .positive({
        message: 'Tồn kho phải là số dương'
      })
      .int({
        message: 'Tồn kho phải là số nguyên'
      }),
    sale_price: z
      .string({
        required_error: 'Sale price field is required',
        invalid_type_error: 'Invalid sale price field'
      })
      .trim()
      .refine(
        (value) => {
          if (value === null || value === '') {
            return true // Allow null value
          }
          const numberValue = parseInt(value, 10)
          return !isNaN(numberValue) && Number.isInteger(numberValue) && numberValue >= 1
        },
        {
          message: 'Please enter a valid sale price'
        }
      ),
    origin_price: z
      .string({
        required_error: 'Origin priceis required',
        invalid_type_error: 'Invalid origin price'
      })
      .trim()
      .refine(
        (value) => {
          const numberValue = parseInt(value, 10)
          return !isNaN(numberValue) && Number.isInteger(numberValue) && numberValue >= 1
        },
        {
          message: 'Vui lòng nhập giá gốc hợp lệ'
        }
      ),
    product_code: z
      .string()
      .refine((value) => value.length === 0 || value.length >= 5, {
        message: 'The product code field must contain at least 5 characters'
      })
      .nullable(),
    images: z.array(ImageObjectSchema, {
      required_error: 'Ảnh là bắt buộc',
      invalid_type_error: 'Invalid images'
    }),
    // .nonempty({
    //   message: 'Phải có ít nhất 1 ảnh'
    // })
    master_fields: z.array(z.any()).optional()
  })
  .refine((data) => parseFloat(data.origin_price) > parseFloat(data.sale_price.length > 0 ? data.sale_price : '0'), {
    message: 'The origin price must be greater than the sale price',
    path: ['origin_price']
  })

export const AddUserFormSchema = z
  .object({
    first_name: z
      .string({
        required_error: 'First name is required',
        invalid_type_error: 'Invalid first name'
      })
      .trim()
      .min(1, {
        message: 'Họ không được để trống'
      })
      .max(100, {
        message: 'The first name field can only contain less than 100 characters'
      }),
    last_name: z
      .string({
        required_error: 'Last name is required',
        invalid_type_error: 'Invalid last name'
      })
      .trim()
      .min(1, {
        message: 'Tên không được để trống'
      })
      .max(100, {
        message: 'The last name field can only contain less than 100 characters'
      }),
    status: z
      .string({
        required_error: 'Status is required',
        invalid_type_error: 'Invalid status'
      })
      .trim()
      .min(1, {
        message: 'Trạng thái sản phẩm là bắt buộc'
      }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Invalid email'
      })
      .email({
        message: 'Email không hợp lệ'
      })
      .min(1, {
        message: 'Email không được để trống'
      })
      .max(100, {
        message: 'The email field can only contain less than 100 characters'
      }),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Invalid password'
      })
      .min(6, {
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
      })
      .max(30, {
        message: 'Mật khẩu không được vượt quá 30 ký tự'
      }),
    confirm_password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Invalid password'
      })
      .min(6, {
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
      })
      .max(30, {
        message: 'Mật khẩu không được vượt quá 30 ký tự'
      }),
    phone_number: z
      .string({
        required_error: 'Phone number is required',
        invalid_type_error: 'Invalid phone number'
      })
      .trim()
      .regex(/^\d+$/, {
        message: 'Số điện thoại không hợp lệ'
      })
      .min(10, {
        message: 'Số điện thoại phải có ít nhất 10 ký tự'
      })
      .max(11, {
        message: 'Số điện thoại không được vượt quá 11 ký tự'
      }),
    house_number: z
      .string({
        required_error: 'Address is required',
        invalid_type_error: 'Invalid address'
      })
      .trim()
      .min(1, {
        message: 'Số nhà không được để trống'
      })
      .max(255, {
        message: 'Số nhà không được vượt quá 255 ký tự'
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
    avatar: z
      .any()
      .refine((value) => value !== undefined && value !== null && value !== '' && value.name !== 'default_2509', {
        message: 'Ảnh là bắt buộc'
      })
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Mật khẩu không khớp',
    path: ['confirm_password']
  })

export const UpdateOrderStatusFormSchema = z.object({
  status: z
    .string({
      required_error: 'Status is required',
      invalid_type_error: 'Invalid status'
    })
    .trim()
    .min(1, {
      message: 'Trạng thái sản phẩm là bắt buộc'
    })
})
