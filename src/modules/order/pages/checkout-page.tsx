import { Steps, Step, useSteps } from 'chakra-ui-steps'
import { DeliveryForm } from '../forms/delivery-form'
import { Box, Button, Flex, HStack, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { DefaultLayout } from '~/layouts'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'
import { PaymentForm } from '../forms/payment-form'
import { useEffect, useState } from 'react'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'

const steps = [{ label: 'Thông tin vận chuyển' }, { label: 'Thanh toán' }, { label: 'Xác nhận thông tin' }]

export const CheckoutPage = ({ variant }: { variant: 'circles' | 'circles-alt' | 'simple' | undefined }) => {
  const checkoutItem = JSON.parse(localStorage.getItem('checkoutItem') || '[]')
  const [checkoutData, setCheckoutData] = useState([])
  const [deliveryData, setDeliveryData] = useState({} as any)
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()

  const handleDeliveryData = (data: any) => {
    setDeliveryData(data)
  }

  useEffect(() => {
    if (checkoutItem.length === 0) {
      navigate(navigationFn.CART)
      toastError('Vui lòng chọn sản phẩm trước khi thanh toán')
    }
  }, [])

  useEffect(() => {
    axiosClient
      .get('client/get_items_in_cart', {
        params: {
          items: checkoutItem
        }
      })
      .then((res: any) => {
        setCheckoutData(res.data)
      })
  }, [])

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })
  const isLastStep = activeStep === steps.length - 1
  const hasCompletedAllSteps = activeStep === steps.length
  const bg = useColorModeValue('blue.200', 'blue.700')

  const handleToHome = () => {
    navigate(navigationFn.HOME)
  }

  return (
    <DefaultLayout>
      <Flex flexDir='column'>
        <Steps variant={variant} colorScheme='blue' activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step label={step.label} key={index}>
              {index === 0 && (
                <DeliveryForm
                  checkoutData={checkoutData}
                  activeStep={activeStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  isLastStep={isLastStep}
                  deliveryData={deliveryData}
                  handleDeliveryData={handleDeliveryData}
                />
              )}
              {index === 1 && (
                <PaymentForm
                  checkoutData={checkoutData}
                  activeStep={activeStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  isLastStep={isLastStep}
                />
              )}
            </Step>
          ))}
        </Steps>
        {hasCompletedAllSteps && (
          <Box sx={{ bg, my: 8, p: 8, rounded: 'md' }}>
            <Heading fontSize='xl' textAlign={'center'}>
              Woohoo! All steps completed! 🎉
            </Heading>
          </Box>
        )}
        <Flex width='100%' justify='flex-end' gap={4} my={'10px'}>
          {hasCompletedAllSteps ? (
            <HStack mt='6' fontWeight='semibold'>
              <Text
                color={'blue.500'}
                _hover={{
                  color: 'primary',
                  cursor: 'pointer'
                }}
                onClick={handleToHome}
              >
                Tiếp tục mua hàng
              </Text>
            </HStack>
          ) : (
            <>
              <Button isDisabled={activeStep === 0} onClick={prevStep} size='sm' variant='ghost'>
                Trước
              </Button>
              <Button size='sm' onClick={nextStep}>
                {isLastStep ? 'Hoàn thành' : 'Tiếp theo'}
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </DefaultLayout>
  )
}
