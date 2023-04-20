import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { formatPrice } from '../other/price-tag'
import { getPrice } from '~/helper/getPrice'

const OrderSummaryItem = (props: any) => {
  const { label, value } = props
  return (
    <Flex justify='space-between' fontSize='sm'>
      <Text fontWeight='medium'>{label}</Text>
      <Text fontWeight='medium'>{value}</Text>
    </Flex>
  )
}

const subTotal = (cart: any) => {
  return cart.cart_items.reduce((acc: any, item: any) => {
    return (
      acc +
      item.quantity * getPrice(item.sale_price, item.origin_price)
    )
  }, 0)
}

export const CartOrderSummary = (props: any) => {
  const { value } = props

  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' width='full'>
      <Heading size='md'>Tóm tắt đơn hàng</Heading>

      <Stack spacing='6'>
        <OrderSummaryItem
          label='Subtotal'
          value={formatPrice(subTotal(value), {
            currency: 'VND'
          })}
        />
        <OrderSummaryItem
          label='Shipping + Tax'
          value={formatPrice(value.shipping_fee, {
            currency: 'VND'
          })}
        />

        {/* <OrderSummaryItem label='Coupon Code'>
          <Link href='#' textDecor='underline'>
            Add coupon code
          </Link>
        </OrderSummaryItem> */}
        <Flex justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Tổng tiền
          </Text>
          <Text fontSize='xl' fontWeight='extrabold'>
            {formatPrice(subTotal(value) + value.shipping_fee, {
              currency: 'VND'
            })}
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme='blue' size='lg' fontSize='md' rightIcon={<FaArrowRight />}>
        Thanh toán
      </Button>
    </Stack>
  )
}
