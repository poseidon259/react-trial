import { Box, Flex, Icon, Skeleton, Text } from '@chakra-ui/react'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { BsCheckCircle, BsFillExclamationTriangleFill } from 'react-icons/bs'
import { useLocation, useNavigate, useParams } from 'react-router'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const CheckoutVNPayPage = () => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search)
  const navigate = useNavigate()

  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosClient
      .get('order/checkout/check/payment_vn_pay', {
        params: queryParams
      })
      .then((res: any) => {
        setSuccess(res.success)
        setMessage(res.message)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        setMessage(err.response.data.message)
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
              <Text textAlign={'center'} pt={'5'}>
                {' '}
                Đơn hàng của bạn đã thanh toán thành công ️🎉
              </Text>
            </>
          ) : (
            <>
              <Box textAlign={'center'}>
                <Icon as={BsFillExclamationTriangleFill} boxSize={'14'} color={'red.600'} />
              </Box>
              <Text textAlign={'center'} pt={'5'}>
                {message}
              </Text>
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
