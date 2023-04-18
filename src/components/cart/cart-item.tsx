import { Box, CloseButton, Flex, FormLabel, Stack, Text, Tooltip } from '@chakra-ui/react'
import { CartProductMeta } from './cart-product-meta'
import { PriceTag } from '../other/price-tag'
import { Controller, useForm } from 'react-hook-form'
import { CustomInput } from '../elements'
import { CartFormSchema } from '~/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { getPrice } from '~/helper/getPrice'

type TCart = {
  product_id: number
  quantity: number
}

export const CartItem = (props: any) => {
  const initialValues = {
    quantity: 1
  } as TCart

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TCart>({
    defaultValues: initialValues,
    resolver: zodResolver(CartFormSchema)
  })

  const { value, onChangeQuantity, onClickDelete } = props

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify='space-between' align='center'>
      <CartProductMeta value={value} />

      <Flex width='full' justify='space-between' display={{ base: 'none', md: 'flex' }}>
        <Stack>
          <Controller
            name='quantity'
            control={control}
            render={({ field }) => {
              return (
                <Flex flex={'1'} alignItems={'center'}>
                  <FormLabel htmlFor='quantity' style={{ whiteSpace: 'nowrap' }}>
                    Số lượng
                  </FormLabel>
                  <CustomInput
                    {...field}
                    id='quantity'
                    type='number'
                    defaultValue={value.quantity}
                    onChange={(e) => {
                      field.onChange(e)
                      // onChangeQuantity(e.target.value)
                    }}
                    maxW={'100px'}
                  />
                  {errors.quantity && <Text variant='error'>{errors.quantity.message}</Text>}
                </Flex>
              )
            }}
          />
        </Stack>
        <PriceTag price={getPrice(value.sale_price, value.origin_price)} currency={'VND'} />
        <Tooltip label={`Delete ${value.product_name} from cart`}>
          <CloseButton aria-label={`Delete ${value.product_name} from cart`} />
        </Tooltip>
      </Flex>
    </Flex>
  )
}
