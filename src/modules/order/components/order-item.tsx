import { Box, HStack, Image, Text } from '@chakra-ui/react'
import { formatPrice } from '~/components/other/price-tag'

export const OrderItem = (props: any) => {
  const { data } = props

  return (
    <HStack>
      <Box w={'100%'}>
        <Image src={data.product_images[0].image} alt={data.product_name} boxSize={'80px'} />
      </Box>
      <Box w={'100%'}>
        {data.child_master_field_id ? (
          <Text fontSize={'14'}>
            {data.master_field_name}: <Text as={'span'} fontWeight={'normal'}>{`${data.child_master_field_id ?? ''}`}</Text>
          </Text>
        ) : (
          'Không có mô tả'
        )}
      </Box>
      <Box w={'100%'}>
        {data.origin_price
          ? formatPrice(data.origin_price, {
              currency: 'VND'
            })
          : ''}
      </Box>
      <Box w={'100%'}>{data.quantity}</Box>
      <Box w={'100%'}>
        {data.total
          ? formatPrice(data.total, {
              currency: 'VND'
            })
          : ''}
      </Box>
    </HStack>
  )
}
