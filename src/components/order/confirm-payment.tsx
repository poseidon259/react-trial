import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { CheckoutOrderSumary } from './checkout-order-sumary'
import { ProductPayment } from './product-payment'
import { fullName } from '~/helper/fullname'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { getPaymentMethod } from '~/helper/getPaymentMethod'
import { formatPrice } from '../other/price-tag'
import { useMutationCreateOrder } from '~/modules/order/api/create-order.api'

export const ConfirmPayment = (props: any) => {
  const { nextStep, activeStep, prevStep, isLastStep, paymentData, deliveryData, checkoutData } = props
  const confirmData = { ...deliveryData, ...paymentData, order_items: checkoutData.cart_items, shipping_fee: checkoutData.shipping_fee }

  const [province, setProvince] = useState({} as any)
  const [district, setDistrict] = useState({} as any)
  const [ward, setWard] = useState({} as any)

  useEffect(() => {
    axiosClient.get(`public/address/province/${confirmData.province}`).then((res: any) => {
      setProvince(res)
    })
    axiosClient.get(`public/address/district/${confirmData.district}`).then((res: any) => {
      setDistrict(res)
    })
    axiosClient.get(`public/address/ward/${confirmData.ward}`).then((res: any) => {
      setWard(res)
    })
  }, [])

  const { mutate } = useMutationCreateOrder()

  const handleSubmit = () => {
    mutate(confirmData)
    nextStep()
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} as='form' w={'full'} onSubmit={handleSubmit}>
      <Stack spacing={8} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Xác nhận thanh toán
          </Heading>
        </Stack>

        <Flex>
          <Box flex={8} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} mr={3}>
            <Text>
              Họ và tên:{' '}
              <Text as={'span'} fontWeight={'normal'}>
                {fullName(confirmData.first_name, confirmData.last_name)}
              </Text>
            </Text>
            <Text>
              Địa chỉ giao hàng:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
              >{`${province?.name}, ${district?.name}, ${ward?.name}, ${confirmData.house_number}`}</Text>
            </Text>
            <Text>
              Số điện thoại:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
              >{`${confirmData.phone_number}`}</Text>
            </Text>
            <Text>
              Email:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
              >{`${confirmData.email}`}</Text>
            </Text>
            <Text>
              Ghi chú:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
              >{`${confirmData.note}`}</Text>
            </Text>
            <Text>
              Phương thức thanh toán:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
              >{`${getPaymentMethod(confirmData.payment_method)}`}</Text>
            </Text>
            <Text>
              Nội dung thanh toán:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
              >{`${confirmData.payment_note}`}</Text>
            </Text>
            <Text>
              Tổng tiền:{' '}
              <Text
                as={'span'}
                fontWeight={'normal'}
                fontSize={'xl'}
              >{`${formatPrice(confirmData.total, {locale: 'VN', currency: 'VND'})}`}</Text>
            </Text>
          </Box>
          <Box flex={'4'} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
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
              {checkoutData.cart_items &&
                checkoutData.cart_items.map((item: any) => (
                  <Box key={item.id} pb={7}>
                    <ProductPayment value={item} />
                  </Box>
                ))}
            </Box>

            <Box>
              <CheckoutOrderSumary value={checkoutData} />
            </Box>
          </Box>
        </Flex>

        <Flex justifyContent={'end'}>
          <Button isDisabled={activeStep === 0} onClick={prevStep} size='sm' variant='ghost'>
            Trước
          </Button>
          <Button size='sm' type='submit'>
            {isLastStep ? 'Hoàn thành' : 'Tiếp theo'}
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}
