import { Box, Flex, Icon, Skeleton, Text } from '@chakra-ui/react'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { BsCheckCircle, BsFillExclamationTriangleFill } from 'react-icons/bs'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useCustomToast } from '~/hooks'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const CheckoutVNPayPage = () => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search)
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()
  const [success, setSuccess] = useState(false)
  const [response, setResponse] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosClient
      .get('order/checkout/check/payment_vn_pay', {
        params: queryParams
      })
      .then((res: any) => {
        setSuccess(res.success)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axiosClient
      .get('/order/checkout/ipn_vn_pay', {
        params: queryParams
      })
      .then((res: any) => {
        setIsLoading(false)
        setResponse(res)
        toastSuccess(res.message)
      })
      .catch((err) => {
        toastError(err.response.data.message)
        setIsLoading(false)
      })
  }, [])

  const handleToHome = () => {
    navigate(navigationFn.HOME)
  }

  return (
    <DefaultLayout>
      <Box as={'h1'} textAlign={'center'} mb={'30px'}>
        Thông tin thanh toán
      </Box>

      {isLoading ? (
        <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
          <Skeleton height={'400px'} width='100%' />
        </Flex>
      ) : (
        <>
          {success ? (
            <>
              <Box textAlign={'center'}>
                <Icon as={BsCheckCircle} boxSize={'14'} color={'green.300'} />
              </Box>
              <Text textAlign={'center'}  pt={'5'}>
                {' '}
                Đơn hàng của bạn đã thanh toán thành công ️🎉
              </Text>
              {queryParams.vnp_TxnRef && (
                <Text textAlign={'center'}>
                  {' '}
                  Mã đơn hàng của bạn là: <b>{queryParams.vnp_TxnRef}</b>
                </Text>
              )}
            </>
          ) : (
            <>
              <Box textAlign={'center'}>
                <Icon as={BsFillExclamationTriangleFill} boxSize={'14'} color={'red.600'} />
              </Box>
              <Text textAlign={'center'}  pt={'5'}>
                Do lỗi hệ thống, đơn hàng của bạn chưa được thanh toán. Vui lòng thử lại sau
              </Text>
              {queryParams.vnp_TxnRef && (
                <Text textAlign={'center'}>
                  {' '}
                  Mã đơn hàng của bạn là: <b>{queryParams.vnp_TxnRef}</b>
                </Text>
              )}
            </>
          )}
        </>
      )}

      <Text
        textAlign={'center'}
        color={'blue.500'}
        _hover={{
          color: 'primary',
          cursor: 'pointer'
        }}
        onClick={handleToHome}
      >
        Tiếp tục mua hàng
      </Text>
    </DefaultLayout>
  )
}
