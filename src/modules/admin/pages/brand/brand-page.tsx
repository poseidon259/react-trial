import { Box, Flex, Heading, Skeleton, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { DataTableBrand } from '~/components/admin/table/data-table-brand'
import { Pagination } from '~/components/other/pagination'
import { useCustomToast } from '~/hooks'
import { AdminLayout } from '~/layouts/admin-layout'
import axiosClient from '~/libs/axios/axiosClient'

export const BrandPage = () => {
  const [brand, setBrand] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const limitPerPage = 5
  const { toastSuccess, toastError } = useCustomToast()

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  localStorage.setItem('selectedParent', '2')
  localStorage.setItem('selectedChild', '4')


  useEffect(() => {
    axiosClient
      .get('category/list', {
        params: {
          page: currentPage,
          limit: limitPerPage
        }
      })
      .then((res: any) => {
        setBrand(res.categories)
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
              Quản lý thương hiệu
            </Heading>
          </Stack>
          {isLoading ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <>
              <DataTableBrand data={brand} />
              {lastPage > 1 && <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />}
            </>
          )}
        </Stack>
      </Box>
    </AdminLayout>
  )
}
