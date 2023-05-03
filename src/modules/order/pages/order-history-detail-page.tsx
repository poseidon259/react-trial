import { Box, Button, Flex, Heading, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductPayment } from '~/components/order/product-payment'
import { formatPrice } from '~/components/other/price-tag'
import { ORDER_STATUS, PAYMENT_METHOD } from '~/configs'
import { fullName } from '~/helper/fullname'
import { getPaymentMethod } from '~/helper/getPaymentMethod'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'

const OrderSummaryItem = (props: any) => {
  const { label, value } = props
  return (
    <Flex justify='space-between' fontSize='sm'>
      <Text m={0} fontWeight='sm'>
        {label}
      </Text>
      <Text m={0} fontWeight='sm'>
        {value}
      </Text>
    </Flex>
  )
}

export const OrderHistoryDetailPage = () => {
  const [order, setOrder] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const paymentVNPay = () => {
    axiosClient.post(`/order/checkout/payment_vn_pay/${id}`).then((res: any) => {
      window.location.href = res
    })
  }

  useEffect(() => {
    axiosClient.get(`/client/order/${id}`).then((res) => {
      setOrder(res.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <DefaultLayout>
      {isLoading ? (
        <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
          <Skeleton height={'400px'} width='100%' />
        </Flex>
      ) : (
        <Box bg={'gray.50'} as='form' w={'full'}>
          <Stack spacing={8} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Thông tin đơn hàng
              </Heading>
            </Stack>

            <Flex>
              <Box flex={8} rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mr={3}>
                <Text>
                  Mã đơn hàng:{' '}
                  <Text as={'span'} fontWeight={'normal'}>
                    {order.order_no}
                  </Text>
                </Text>
                <Text>
                  Họ và tên:{' '}
                  <Text as={'span'} fontWeight={'normal'}>
                    {fullName(order.first_name, order.last_name)}
                  </Text>
                </Text>
                <Text>
                  Địa chỉ giao hàng:{' '}
                  <Text as={'span'} fontWeight={'normal'}>
                    {`${order.province_name}, ${order.district_name}, ${order.ward_name}, ${order.house_number ?? ''}`}
                  </Text>
                </Text>
                <Text>
                  Số điện thoại: <Text as={'span'} fontWeight={'normal'}>{`${order.phone_number}`}</Text>
                </Text>
                <Text>
                  Email: <Text as={'span'} fontWeight={'normal'}>{`${order.email}`}</Text>
                </Text>
                <Text>
                  Ghi chú: <Text as={'span'} fontWeight={'normal'}>{`${order.note ?? ''}`}</Text>
                </Text>
                <Text>
                  Phương thức thanh toán:{' '}
                  <Text as={'span'} fontWeight={'normal'}>{`${getPaymentMethod(order.payment_method + '')}`}</Text>
                </Text>
                <Text>
                  Nội dung thanh toán: <Text as={'span'} fontWeight={'normal'}>{`${order.payment_note ?? ''}`}</Text>
                </Text>
                <Text>
                  Tổng tiền sản phẩm:{' '}
                  <Text as={'span'} fontWeight={'normal'} fontSize={'xl'}>{`${formatPrice(order.sub_total, {
                    locale: 'VN',
                    currency: 'VND'
                  })}`}</Text>
                </Text>
                <Text>
                  Tổng tiền:{' '}
                  <Text as={'span'} fontWeight={'normal'} fontSize={'xl'}>{`${formatPrice(order.total, {
                    locale: 'VN',
                    currency: 'VND'
                  })}`}</Text>
                </Text>

                <Box>
                  {order.status === ORDER_STATUS.PENDING && order.payment_method != PAYMENT_METHOD.COD && (
                    <Button colorScheme={'cyan'} color={'white'} onClick={paymentVNPay}>
                      Thanh toán
                    </Button>
                  )}
                </Box>
              </Box>
              <Box flex={'4'} rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
                <Box
                  maxHeight='250px'
                  overflowY='scroll'
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '4px'
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '6px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#FFC0CB',
                      borderRadius: '24px'
                    }
                  }}
                >
                  {order.order_items &&
                    order.order_items.map((item: any) => (
                      <Box key={item.id} pb={7}>
                        <ProductPayment value={item} />
                      </Box>
                    ))}
                </Box>

                <Box>
                  <Stack spacing='8' rounded='lg' pt='8' width='full'>
                    <Stack spacing='6'>
                      <OrderSummaryItem
                        label='Tổng giá sản phẩm'
                        value={formatPrice(order.sub_total, {
                          currency: 'VND'
                        })}
                      />
                      <OrderSummaryItem
                        label='Phí vận chuyển + thuế'
                        value={formatPrice(order.delivery_fee, {
                          currency: 'VND'
                        })}
                      />
                      <Flex justify='space-between'>
                        <Text fontSize='md' fontWeight='semibold'>
                          Tổng tiền
                        </Text>
                        <Text fontSize='md' fontWeight='extrabold'>
                          {formatPrice(order.total, {
                            currency: 'VND'
                          })}
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Box>
      )}
    </DefaultLayout>
  )
}
