import { Flex, Stack, Text } from '@chakra-ui/react'
import { formatPrice } from '../other/price-tag'
import { getPrice } from '~/helper/getPrice'

const OrderSummaryItem = (props: any) => {
  const { label, value } = props
  return (
    <Flex justify='space-between' fontSize='sm'>
      <Text m={0} fontWeight='sm'>{label}</Text>
      <Text m={0} fontWeight='sm'>{value}</Text>
    </Flex>
  )
}

const subTotal = (items: any) => {
  return items.cart_items?.reduce((acc: any, item: any) => {
    return acc + item.quantity * getPrice(item.sale_price, item.origin_price)
  }, 0)
}

export const CheckoutOrderSumary = (props: any) => {
  const { value } = props

  return (
    <Stack spacing='8' rounded='lg' pt='8' width='full'>
      <Stack spacing='6'>
        <OrderSummaryItem
          label='Tổng giá sản phẩm'
          value={formatPrice(subTotal(value), {
            currency: 'VND'
          })}
        />
        <OrderSummaryItem
          label='Phí vận chuyển + thuế'
          value={formatPrice(value.shipping_fee, {
            currency: 'VND'
          })}
        />
        <Flex justify='space-between'>
          <Text fontSize='md' fontWeight='semibold'>
            Tổng tiền
          </Text>
          <Text fontSize='md' fontWeight='extrabold'>
            {formatPrice(subTotal(value) + value.shipping_fee, {
              currency: 'VND'
            })}
          </Text>
        </Flex>
      </Stack>
    </Stack>
  )
}
