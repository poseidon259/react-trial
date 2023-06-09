import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ImageUpload } from '~/components/admin/upload/image-upload'
import { AddProductFormSchema } from '~/validations/admin-validation'
import { useMutationAddProduct } from '../../api/add-product.api'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { PRODUCT_STATUS } from '~/configs'
import { useCustomToast } from '~/hooks'

type TMasterField = {
  name: string
  stock: number
  sale_price: string
  origin_price: string
}

type TProduct = {
  name: string
  category_id: string
  description_list: string
  description_detail: string
  stock: number
  sale_price: string
  origin_price: string
  product_code: string
  status: string
  images: File[]
  master_fields: TMasterField[]
}

export const ProductNewForm = () => {
  const [categories, setCategories] = useState([])
  const [masterFields, setMasterFields] = useState<any>([])
  const { toastSuccess, toastError } = useCustomToast()

  const createInput = () => {
    setMasterFields([...masterFields, { name: '', sale_price: '', origin_price: '', stock: 0 }])
  }

  const handleInputChange = (index: any, property: any, value: any) => {
    const newMasterFields = [...masterFields]
    newMasterFields[index][property] = value
    setMasterFields(newMasterFields)
  }

  const deleteInput = (index: number) => {
    const newMasterFields = [...masterFields]
    newMasterFields.splice(index, 1)
    setMasterFields(newMasterFields)
  }

  useEffect(() => {
    axiosClient
      .get('/category/list')
      .then((res: any) => {
        setCategories(res.categories)
      })
      .catch((err: any) => {
        toastError('Lỗi khi lấy danh sách danh mục')
      })
  }, [])

  const initialValues = {
    name: '',
    category_id: '',
    description_list: '',
    description_detail: '',
    stock: 0,
    sale_price: '',
    origin_price: '',
    product_code: '',
    status: '',
    images: [],
    master_fields: []
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TProduct>({
    defaultValues: initialValues,
    resolver: zodResolver(AddProductFormSchema)
  })

  const { mutate, isLoading } = useMutationAddProduct()

  const onSubmit = (data: TProduct) => {
    data.master_fields = masterFields
    mutate(data)
  }

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      mr={3}
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={4}>
        <HStack>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='name' isRequired>
                  <FormLabel htmlFor='name'>Tên sản phẩm</FormLabel>
                  <Input {...field} id='name' type='text' name='name' />
                </FormControl>
                {errors.name && <Text variant='error'>{errors.name.message}</Text>}
              </Box>
            )}
          />
          <Controller
            name='category_id'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='category_id' isRequired>
                  <FormLabel htmlFor='category_id'>Danh mục sản phẩm</FormLabel>
                  <Select
                    {...field}
                    cursor={'pointer'}
                    placeholder={'Chọn danh mục'}
                    size='md'
                    backgroundColor={'white'}
                    _hover={{
                      backgroundColor: 'white'
                    }}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    {categories.map((option: any) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                {errors.category_id && <Text variant='error'>{errors.category_id.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='sale_price'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='sale_price'>
                  <FormLabel htmlFor='sale_price'>Giá sale</FormLabel>
                  <Input {...field} id='sale_price' name='sale_price' />
                </FormControl>
                {errors.sale_price && <Text variant='error'>{errors.sale_price.message}</Text>}
              </Box>
            )}
          />
          <Controller
            name='origin_price'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='origin_price' isRequired>
                  <FormLabel htmlFor='origin_price'>Giá bán</FormLabel>
                  <Input {...field} id='origin_price' name='origin_price' />
                </FormControl>
                {errors.origin_price && <Text variant='error'>{errors.origin_price.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='stock'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='stock' isRequired>
                  <FormLabel htmlFor='stock'>Tồn kho</FormLabel>
                  <Input
                    {...field}
                    id='stock'
                    name='stock'
                    onChange={(e) => {
                      const parsedValue = parseFloat(e.target.value ?? 0)
                      field.onChange(parsedValue)
                    }}
                  />
                </FormControl>
                {errors.stock && <Text variant='error'>{errors.stock.message}</Text>}
              </Box>
            )}
          />
          <Controller
            name='product_code'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='product_code'>
                  <FormLabel htmlFor='product_code'>Mã sản phẩm</FormLabel>
                  <Input {...field} id='product_code' name='product_code' />
                </FormControl>
                {errors.product_code && <Text variant='error'>{errors.product_code.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='description_list'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='description_list'>
                  <FormLabel htmlFor='description_list'>Mô tả màn danh sách</FormLabel>
                  <Textarea {...field} id='description_list' name='description_list' rows={5} resize={'none'} />
                </FormControl>
                {errors.description_list && <Text variant='error'>{errors.description_list.message}</Text>}
              </Box>
            )}
          />
          <Controller
            name='description_detail'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='description_detail' isRequired>
                  <FormLabel htmlFor='description_detail'>Mô tả màn chi tiết</FormLabel>
                  <Textarea {...field} id='description_detail' name='description_detail' rows={5} resize={'none'} />
                </FormControl>
                {errors.description_detail && <Text variant='error'>{errors.description_detail.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='status'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='status' isRequired>
                  <FormLabel htmlFor='status'>Trạng thái sản phẩm</FormLabel>
                  <RadioGroup
                    onChange={(e) => {
                      field.onChange(e)
                    }}
                    value={field.value.toString()}
                  >
                    <Stack direction='row'>
                      {PRODUCT_STATUS.map((option: any) => (
                        <Radio key={option.id} value={option.id.toString()}>
                          {option.name}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </FormControl>
                {errors.status && <Text variant='error'>{errors.status.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='images'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='images' isRequired>
                  <FormLabel htmlFor='images'>Ảnh</FormLabel>
                  <ImageUpload displayButton={5} multiple={true} onChange={(file: File) => field.onChange(file)} />
                </FormControl>
                {errors.images && <Text variant='error'>{errors.images.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <Stack>
          {masterFields.map((field: any, index: any) => (
            <HStack key={index} w='100%'>
              <FormControl id={`master_fields[${index}].name`} isRequired>
                <FormLabel htmlFor={`master_fields[${index}].name`}>Dung tích</FormLabel>
                <Input required value={field.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} />
              </FormControl>
              <FormControl id={`master_fields[${index}].sale_price`}>
                <FormLabel htmlFor={`master_fields[${index}].sale_price`}>Giá sale</FormLabel>
                <Input
                  value={field.sale_price}
                  onChange={(e) => handleInputChange(index, 'sale_price', e.target.value)}
                />
              </FormControl>
              <FormControl id={`master_fields[${index}].origin_price`} isRequired>
                <FormLabel htmlFor={`master_fields[${index}].origin_price`}>Giá bán</FormLabel>
                <Input
                  value={field.origin_price}
                  required
                  onChange={(e) => handleInputChange(index, 'origin_price', e.target.value)}
                  isInvalid={
                    !/^\d+$/.test(field.origin_price) || parseInt(field.origin_price) <= parseInt(field.sale_price)
                  }
                />
                {!/^\d+$/.test(field.origin_price) && <Text variant='error'>Giá bán phải là số</Text>}
                {parseInt(field.origin_price) <= parseInt(field.sale_price) && (
                  <Text variant='error'>Giá bán phải lớn hơn giá sale</Text>
                )}
              </FormControl>
              <FormControl id={`master_fields[${index}].stock`} isRequired>
                <FormLabel htmlFor={`master_fields[${index}].stock`}>Tồn kho</FormLabel>
                <Input
                  value={field.stock}
                  onChange={(e) => handleInputChange(index, 'stock', parseInt(e.target.value))}
                  isInvalid={parseInt(field.stock) <= 0}
                />
                {parseInt(field.stock) <= 0 && <Text variant='error'>Tồn kho phải lớn hơn 0</Text>}
              </FormControl>
              <FormControl>
                <FormLabel>Action</FormLabel>
                <Button colorScheme='red' onClick={() => deleteInput(index)}>
                  Xóa
                </Button>
              </FormControl>
            </HStack>
          ))}
        </Stack>

        <Button onClick={createInput} backgroundColor={'teal.300'} color={'white'} w={'150px'}>
          Thêm dung tích
        </Button>

        <Button type='submit' backgroundColor={'blue.500'} color={'white'} w={'120px'} isLoading={isLoading}>
          Tạo mới
        </Button>
      </Stack>
    </Box>
  )
}
