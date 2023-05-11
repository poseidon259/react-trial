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
      message: 'The name field must contain at least 4 character'
    })
    .max(100, {
      message: 'The name field can only contain less than 100 characters'
    }),
  image: z.custom(
    (value) => {
      if (!isFile(value)) {
        throw new Error('Image must be a file')
      }
      return value
    },
    {
      message: 'Invalid image'
    }
  )
})

const ImageObjectSchema = z.object({
  file: z.instanceof(File),
  sort: z.number().positive()
})

export const AddProductFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Invalid name'
    })
    .trim()
    .min(4, {
      message: 'The name field must contain at least 4 character'
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
      message: 'The description field can only contain less than 3000 characters'
    }),
  description_list: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Invalid description'
    })
    .trim()
    .max(255, {
      message: 'The description field can only contain less than 255 characters'
    }),
  status: z
    .string({
      required_error: 'Status is required',
      invalid_type_error: 'Invalid status'
    })
    .trim()
    .min(1, {
      message: 'The status field must contain at least 1 character'
    }),
  stock: z
    .number()
    .positive({
      message: 'The stock field must be a positive number'
    })
    .int({
      message: 'The stock field must be an integer'
    }),
  sale_price: z
    .number()
    .positive({
      message: 'The sale price field must be a positive number'
    })
    .int({
      message: 'The sale price field must be an integer'
    }),
  origin_price: z
    .number()
    .positive({
      message: 'The origin price field must be a positive number'
    })
    .int({
      message: 'The origin price field must be an integer'
    }),
  product_code: z
    .string({
      required_error: 'Product code is required',
      invalid_type_error: 'Invalid product code'
    })
    .trim()
    .min(1, {
      message: 'The product code field must contain at least 1 character'
    }),
  images: z.array(ImageObjectSchema)
})
