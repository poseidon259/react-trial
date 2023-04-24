import { useState } from 'react'
import {
  Button,
  Box,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
  RadioGroup,
  Radio,
  Icon,
  VStack,
  HStack
} from '@chakra-ui/react'
import { ProductPayment } from '~/components/order/product-payment'
import { CheckoutOrderSumary } from '~/components/order/checkout-order-sumary'
import { FaCreditCard, FaMoneyBill } from 'react-icons/fa'
import { MdOutlinePayments } from 'react-icons/md'
import { CreditCardForm } from '~/modules/order/forms/credit-card-form'
import { VNPayForm } from './vnpay-form'

export const PaymentForm = (props: any) => {
  const { checkoutData, nextStep, activeStep, prevStep, isLastStep } = props
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} as='form' w={'full'}>
      <Stack spacing={8} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Thanh toán
          </Heading>
        </Stack>
        <Flex>
          <Box flex={8} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} mr={3}>
            <Flex justifyContent='center'>
              <RadioGroup  onChange={handleOptionChange} value={selectedOption}>
                <HStack spacing={4}>
                  <Radio value='transfer'>
                    <Flex align='center'>
                      <Icon as={FaMoneyBill} mr={2} />
                      Thanh toán khi nhận hàng
                    </Flex>
                  </Radio>
                  <Radio value='card'>
                    <Flex align='center'>
                      <Icon as={FaCreditCard} mr={2} />
                      Visa/Master Card
                    </Flex>
                  </Radio>
                  <Radio value='vnpay'>
                    <Flex align='center'>
                      <Icon as={MdOutlinePayments} mr={2} />
                      Thanh khoán qua VNPay
                    </Flex>
                  </Radio>
                </HStack>
              </RadioGroup>
            </Flex>

            {selectedOption === 'card' && <CreditCardForm />}
            {selectedOption === 'vnpay' && <VNPayForm />}
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
