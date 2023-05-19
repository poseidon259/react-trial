import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  Select,
  Stack,
  Text
} from '@chakra-ui/react'

import { Rating } from '../other/rating'
import { PriceTag } from '../other/price-tag'
import { ProductImageSlider } from './product-images-slider'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutationAddToCart } from '~/modules/order/api/add-to-cart.api'
import { AddToCartFieldSchema, AddToCartNoFieldSchema } from '~/validations'

type TAddToCart = {
  product_id: number
  quantity: number
  child_master_field_id: string
}

export const ProductDetail = (props: any) => {
  const { quantityCallback, quantity, product, masterFieldCallback, masterField } = props
  const handleIncreaseQuantity = () => {
    quantityCallback((quantity: number) => quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      quantityCallback((quantity: number) => quantity - 1)
    }
  }

  const handleChangeQuantity = (quantity: any) => {
    quantityCallback(quantity)
  }

  const handleMasterFieldClick = (masterFieldId: any) => {
    if (masterField === masterFieldId) {
      masterFieldCallback('')
    } else {
      masterFieldCallback(masterFieldId)
    }
  }

  const initialValues = {
    product_id: product.id,
    quantity: 1,
    child_master_field_id: ''
  } as TAddToCart

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TAddToCart>({
    defaultValues: initialValues,
    resolver: zodResolver(product.master_fields.length > 0 ? AddToCartFieldSchema : AddToCartNoFieldSchema)
  })

  const { mutate, isLoading } = useMutationAddToCart()

  const onSubmit = (data: TAddToCart) => {
    data.product_id = product.id
    data.quantity = quantity
    mutate(data)
  }

  console.log(product)

  return (
    <Box as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={12} justifyContent={'center'} minH={'600px'}>
        <Box maxW={'50%'} mx={'auto'} flex={1}>
          <ProductImageSlider images={product.product_images} />
        </Box>
        <Box maxW={'50%'} flex={1}>
          <Stack>
            <Stack minH={'51vh'}>
              <Heading as='h2' fontSize='2xl' pt='10px'>
                {product.name}
              </Heading>
              <HStack>
                <Rating defaultValue={product.avg_rating ?? 0} size='sm' />
                <Text fontSize='sm' color={'gray.400'}>
                  {product.comments_count} Reviews
                </Text>
              </HStack>
              <PriceTag salePrice={product.sale_price} price={product.origin_price} currency='VND' />
              <Box fontSize='md' fontWeight={'light'}>
                <Text as={'span'} fontWeight={'medium'}>
                  Thương hiệu:
                </Text>{' '}
                {product.category_name}
              </Box>
              <Box fontSize='md' fontWeight={'light'}>
                <Text pt={'10px'}>Mô tả sản phẩm</Text>
                {product.description_detail}
              </Box>
              <Box fontSize='md' fontWeight={'light'}>
                <Text as={'span'} fontWeight={'bold'} pt={'10px'} pr={'10px'}>
                  Tồn kho:
                </Text>
                {product.stock}
              </Box>
              {product.master_fields.length > 0 && (
                <>
                  <Text textTransform={'capitalize'} fontSize='md'>
                    {product.master_fields[0].name}
                  </Text>
                  <Controller
                    name='child_master_field_id'
                    control={control}
                    render={({ field }) => (
                      <Box>
                        <Select
                          {...field}
                          placeholder={'Vui lòng chọn ' + product.master_fields[0].name}
                          textTransform={'capitalize'}
                          onChange={(e) => {
                            field.onChange(e)
                            handleMasterFieldClick(e.target.value)
                          }}
                        >
                          {product.master_fields[0].childs.map((childMasterField: any) => (
                            <option key={childMasterField.id} value={childMasterField.id}>
                              {childMasterField.name}
                            </option>
                          ))}
                        </Select>
                        {errors.child_master_field_id && (
                          <Text variant='error'>{errors.child_master_field_id.message}</Text>
                        )}
                      </Box>
                    )}
                  />
                </>
              )}
              <FormControl id='quantity' isInvalid={!!errors.quantity}>
                <FormLabel fontSize='md'>Số lượng</FormLabel>
                <InputGroup size='md'>
                  <Button
                    onClick={handleDecreaseQuantity}
                    isDisabled={quantity === 1}
                    bg='gray.200'
                    color='black'
                    size='md'
                    fontWeight='bold'
                  >
                    -
                  </Button>
                  <Controller
                    name='quantity'
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          name='quantity'
                          id='quantity'
                          type='number'
                          value={quantity}
                          min={1}
                          onChange={(e) => handleChangeQuantity(parseInt(e.target.value) || 1)}
                          textAlign='center'
                          border='1px'
                          borderColor='gray.300'
                          fontWeight='bold'
                          w='100px'
                          px={{ base: '2', md: '4' }}
                          mx={{ base: '2', md: '2' }}
                        />
                      </>
                    )}
                  />
                  <Button size='md' onClick={handleIncreaseQuantity} bg='gray.200' color='black' fontWeight='bold'>
                    +
                  </Button>
                </InputGroup>
              </FormControl>
            </Stack>
            <Box w={'full'} pt={'30px'}>
              <Button
                type='submit'
                size='lg'
                color='white'
                backgroundColor={'primary'}
                w={'full'}
                isLoading={isLoading}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
