import { useState } from 'react'
import { Button, Box, Stack, Heading, Flex, useColorModeValue, RadioGroup, Radio, Text } from '@chakra-ui/react'
import { ProductPayment } from '~/components/order/product-payment'
import { CheckoutOrderSumary } from '~/components/order/checkout-order-sumary'
import { CreditCardForm } from '~/modules/order/forms/credit-card-form'
import { VNPayForm } from './vnpay-form'
import { Images } from '~/assets'
import { PAYMENT_METHOD } from '~/configs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { CODFormSchema, CardFormSchema, VNpayFormSchema } from '~/validations/checkout-validation'
import { isObjectEmpty } from '~/helper/isObjectEmpty'

type TPayment = {
  payment_method: string
  payment_note: string
}

export const PaymentForm = (props: any) => {
  const { checkoutData, nextStep, activeStep, prevStep, isLastStep, total, paymentData, handlePaymentData } = props
  const [paymentMethod, setPaymentMethod] = useState(paymentData.payment_method || '')

  const initialValues = {
    payment_method: '',
    payment_note: ''
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TPayment>({
    defaultValues: isObjectEmpty(paymentData) ? initialValues : paymentData,
    resolver: zodResolver(
      paymentMethod === PAYMENT_METHOD.COD
        ? CODFormSchema
        : paymentMethod === PAYMENT_METHOD.VNPAY
        ? VNpayFormSchema
        : CardFormSchema
    )
  })

  const handleOptionChange = (value: string) => {
    setPaymentMethod(value)
  }

  const onSubmit = (data: any) => {
    data.total = total
    handlePaymentData(data)
    nextStep()
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} as='form' w={'full'} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={8} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Thanh toán
          </Heading>
        </Stack>
        <Flex>
          <Box flex={8} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} mr={3}>
            <Controller
              name='payment_method'
              control={control}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  onChange={(e) => {
                    handleOptionChange(e)
                    field.onChange(e)
                  }}
                  value={paymentMethod}
                >
                  <Stack spacing={4}>
                    <Radio value={PAYMENT_METHOD.COD}>
                      <Flex align='center'>
                        <Box
                          w='100px'
                          h='100px'
                          bgImage={`url(${Images.cod})`}
                          bgPos='center'
                          bgRepeat='no-repeat'
                          bgSize='contain'
                          pr={2}
                        />
                        Thanh toán khi nhận hàng
                      </Flex>
                    </Radio>
                    <Radio value={PAYMENT_METHOD.CARD}>
                      <Flex align='center'>
                        <Box
                          w='100px'
                          h='100px'
                          bgImage={`url(${Images.visa})`}
                          bgPos='center'
                          bgRepeat='no-repeat'
                          bgSize='contain'
                          pr={2}
                        />
                        Visa/Mastercard
                      </Flex>
                    </Radio>
                    <Radio value={PAYMENT_METHOD.VNPAY}>
                      <Flex align='center'>
                        <Box
                          w='100px'
                          h='100px'
                          bgImage={`url(${Images.vnpay})`}
                          bgPos='center'
                          bgRepeat='no-repeat'
                          bgSize='contain'
                          pr={2}
                        />
                        Thanh khoán qua VNPay
                      </Flex>
                    </Radio>
                  </Stack>
                  {errors.payment_method && <Text variant='error'>{errors.payment_method.message}</Text>}
                </RadioGroup>
              )}
            />
            <Box>
              {paymentMethod === PAYMENT_METHOD.CARD && <CreditCardForm />}
              {paymentMethod === PAYMENT_METHOD.VNPAY && (
                <VNPayForm
                  total={total}
                  paymentData={paymentData}
                  handlePaymentData={handlePaymentData}
                  control={control}
                  errors={errors}
                />
              )}
            </Box>
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
