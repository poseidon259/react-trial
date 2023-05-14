import { Box, Flex, Heading, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react'
import { DataTableUser } from '~/components/admin/table/data-table-user'
import { AdminLayout } from '~/layouts/admin-layout'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { useCustomToast } from '~/hooks'
import { Pagination } from '~/components/other/pagination'

export const UserPage = () => {
  const [users, setUsers] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const limitPerPage = 5
  const { toastSuccess, toastError } = useCustomToast()

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  localStorage.setItem('selectedParent', '4')
  localStorage.setItem('selectedChild', '8')

  useEffect(() => {
    axiosClient
      .get('user/list', {
        params: {
          page: currentPage,
          limit: limitPerPage
        }
      })
      .then((res: any) => {
        setUsers(res.users)
        setCurrentPage(res.current_page)
        setLastPage(res.last_page)
        setIsLoading(false)
      })
      .catch((err) => {
        toastError(err.response.data.message)
      })
  }, [currentPage, limitPerPage])

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
        <Stack spacing={8} py={8} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Quản lý sản phẩm
            </Heading>
          </Stack>
          {isLoading ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <>
              <DataTableUser data={users} />
              {lastPage > 1 && <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />}
            </>
          )}
        </Stack>
      </Box>
    </AdminLayout>
  )
}
