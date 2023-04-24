import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { PriceTag } from '../other/price-tag'
import { getPrice } from '~/helper/getPrice'
import { ProductCartPayment } from './product-card-payment'

export const ProductPayment = (props: any) => {
  const { value } = props

  return (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Box flex={9}>
        <ProductCartPayment value={value} />
      </Box>
      <Box flex={4}>
        <Text fontSize={'sm'}>
          Số lượng: {value?.quantity}
        </Text>
        <Flex>
          <Text as={'span'} pr={2} fontSize={'sm'}>Giá: </Text>
          <PriceTag priceProps={{ fontSize: 'sm' }} price={getPrice(value.sale_price, value.origin_price)} currency={'VND'} />
        </Flex>
      </Box>
    </Flex>
  )
}
