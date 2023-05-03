import { Box, Flex, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { OrderHistoryList } from '~/components/order/order-history-list'
import { Pagination } from '~/components/other/pagination'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'

export const OrderHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const limit = 10
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    axiosClient
      .get('/client/order_history', {
        params: {
          page: currentPage,
          limit: limit
        }
      })
      .then((res: any) => {
        setOrders(res.orders)
        setCurrentPage(res.current_page)
        setLastPage(res.last_page)
        setIsLoading(false)
      })
  }, [currentPage, limit])

  return (
    <DefaultLayout>
      {isLoading ? (
        <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
          <Skeleton height={'400px'} width='100%' />
        </Flex>
      ) : (
        <>
          <OrderHistoryList orders={orders} />
          {lastPage > 1 && <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />}
        </>
      )}
    </DefaultLayout>
  )
}
