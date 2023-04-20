import { CloseButton, Flex, FormLabel, Input, Stack, Text, Tooltip } from '@chakra-ui/react'
import { CartProductMeta } from './cart-product-meta'
import { PriceTag } from '../other/price-tag'
import { Controller, useForm } from 'react-hook-form'
import { UpdateQuantityCartFormSchema } from '~/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { getPrice } from '~/helper/getPrice'
import { useMutationUpdateQuantityCart } from '~/modules/order/api/update-quantity-cart.api'
import { useMutationDeleteProductInCart } from '~/modules/order/api/delete-product-in-cart.api'

type TUpdateQuantityCart = {
  product_id: number
  quantity: number
  child_master_field_id: number
}

type TDeleteProductInCart = {
  product_id: number
  child_master_field_id: number
}

export const CartItem = (props: any) => {
  const { value, handleCartUpdate } = props

  const initialValues = {
    product_id: value.product_id,
    quantity: value.quantity,
    child_master_field_id: value.child_master_field_id
  } as TUpdateQuantityCart

  const {
    control,
    formState: { errors }
  } = useForm<TUpdateQuantityCart>({
    defaultValues: initialValues,
    resolver: zodResolver(UpdateQuantityCartFormSchema)
  })

  const { mutate: updateQuantityCart } = useMutationUpdateQuantityCart()
  const { mutate: deleteProductInCart } = useMutationDeleteProductInCart()

  const onChangeQuantity = (data: TUpdateQuantityCart) => {
    updateQuantityCart(data)
  }

  const handleDeleteProductInCart = (data: TDeleteProductInCart) => {
    deleteProductInCart(data)
    handleCartUpdate()
  }

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify='space-between' align='center'>
      <CartProductMeta value={value} />

      <Flex width='full' justify='space-between' display={{ base: 'none', md: 'flex' }}>
        <Stack>
          <Controller
            name='quantity'
            control={control}
            render={({ field }) => (
              <Stack>
                <Flex flex='1' alignItems='center'>
                  <Input
                    {...field}
                    id={`quantity${value.id}`}
                    type='number'
                    maxW='100px'
                    min='0'
                    step='1'
                    onChange={field.onChange}
                    onBlur={(e) => {
                      onChangeQuantity({
                        product_id: value.product_id,
                        quantity: Number(e.target.value),
                        child_master_field_id: value.child_master_field_id
                      })
                      handleCartUpdate()
                    }}
                  />
                </Flex>
                {errors.quantity && <Text variant='error'>{errors.quantity.message}</Text>}
              </Stack>
            )}
          />
        </Stack>
        <PriceTag price={getPrice(value.sale_price, value.origin_price)} currency={'VND'} />
        <Tooltip label={`Delete ${value.product_name} from cart`}>
          <CloseButton
            aria-label={`Delete ${value.product_name} from cart`}
            onClick={() =>
              handleDeleteProductInCart({
                product_id: value.product_id,
                child_master_field_id: value.child_master_field_id
              })
            }
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
}
