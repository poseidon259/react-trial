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
import { getPrice } from '~/helper/getPrice'
import { ConfirmPayment } from '~/components/order/confirm-payment'

const steps = [{ label: 'Thông tin vận chuyển' }, { label: 'Thanh toán' }, { label: 'Xác nhận thông tin' }]

export const CheckoutPage = ({ variant }: { variant: 'circles' | 'circles-alt' | 'simple' | undefined }) => {
  const checkoutItem = JSON.parse(localStorage.getItem('checkoutItem') || '[]')
  const [checkoutData, setCheckoutData] = useState({} as any)
  const [deliveryData, setDeliveryData] = useState({} as any)
  const [paymentData, setPaymentData] = useState({} as any)
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })
  const isLastStep = activeStep === steps.length - 1
  const hasCompletedAllSteps = activeStep === steps.length
  const bg = useColorModeValue('blue.200', 'blue.700')

  const handleDeliveryData = (data: any) => {
    setDeliveryData(data)
  }

  const handlePaymentData = (data: any) => {
    setPaymentData(data)
  }

  useEffect(() => {
    if (checkoutItem.length === 0) {
      navigate(navigationFn.CART)
      toastError('Vui lòng chọn sản phẩm trước khi thanh toán')
    }
  }, [])

  useEffect(() => {
    if (hasCompletedAllSteps) {
      navigate(navigationFn.ORDER_HISTORY)
    }
  }, [hasCompletedAllSteps, navigate])

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

  const subTotal = (items: any) => {
    return items.cart_items?.reduce((acc: any, item: any) => {
      return acc + item.quantity * getPrice(item.sale_price, item.origin_price)
    }, 0)
  }

  const total = subTotal(checkoutData) + checkoutData.shipping_fee

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
                  total={total}
                />
              )}
              {index === 1 && (
                <PaymentForm
                  checkoutData={checkoutData}
                  activeStep={activeStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  isLastStep={isLastStep}
                  total={total}
                  paymentData={paymentData}
                  handlePaymentData={handlePaymentData}
                />
              )}
              {index === 2 && (
                <ConfirmPayment
                  checkoutData={checkoutData}
                  deliveryData={deliveryData}
                  paymentData={paymentData}
                  activeStep={activeStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  isLastStep={isLastStep}
                />
              )}
            </Step>
          ))}
        </Steps>
      </Flex>
    </DefaultLayout>
  )
}
