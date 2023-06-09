import { Box, Flex, Heading, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react'
import { AdminLayout } from '~/layouts/admin-layout'
import { UserEditForm } from '../../forms/user/user-edit-form'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'

export const UserEditPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toastSuccess, toastError } = useCustomToast()
  const navigate = useNavigate()

  useEffect(() => {
    axiosClient
      .get(`/user/show/${id}`)
      .then((res) => {
        setUser(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        toastError(error.response.data.message)
        navigate('/admin/user')
      })
  }, [])

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
        <Stack spacing={8} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Sửa thông tin người dùng
            </Heading>
          </Stack>
          {isLoading ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <UserEditForm data={user} />
          )}
        </Stack>
      </Box>
    </AdminLayout>
  )
}
