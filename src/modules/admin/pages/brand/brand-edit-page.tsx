import { Box, Flex, Heading, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react'
import { AdminLayout } from '~/layouts/admin-layout'
import { BrandEditForm } from '../../forms/brand/brand-edit-form'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { useNavigate, useParams } from 'react-router-dom'
import { useCustomToast } from '~/hooks'

export const BrandEditPage = () => {
  const { id } = useParams()
  const [brand, setBrand] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toastSuccess, toastError } = useCustomToast()
  const navigate = useNavigate()

  useEffect(() => {
    axiosClient
      .get(`category/show/${id}`)
      .then((res) => {
        setBrand(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        toastError(error.response.data.message)
        navigate('/admin/brand')
      })
  }, [])

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
        <Stack spacing={8} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Sửa thương hiệu
            </Heading>
          </Stack>
          {isLoading ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <BrandEditForm data={brand} />
          )}
        </Stack>
      </Box>
    </AdminLayout>
  )
}
