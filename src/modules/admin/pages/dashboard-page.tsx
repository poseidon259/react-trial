import { Box, Flex, Icon, SimpleGrid, Skeleton, Text, useColorModeValue } from '@chakra-ui/react'
import { BiMoney, BiTask } from 'react-icons/bi'
import { MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { MiniStatistics } from '~/components/admin/card/MiniStatistics'
import IconBox from '~/components/admin/icons/IconBox'
import { AdminLayout } from '~/layouts/admin-layout'
import { TotalSpent } from '~/components/admin/static/TotalSpent'
import WeeklyRevenue from '~/components/admin/static/WeeklyRevenue'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { useCustomToast } from '~/hooks'
import { formatPrice } from '~/components/other/price-tag'

export const DashboardPage = () => {
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toastSuccess, toastError } = useCustomToast()
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  localStorage.setItem('selectedParent', '1')
  localStorage.setItem('selectedChild', '100')

  useEffect(() => {
    axiosClient
      .get('/dashboard')
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
      .catch((err) => {
        toastError('Lỗi lấy dữ liệu')
      })
  }, [])

  console.log(data)
  return (
    <AdminLayout>
      <Box px={'20px'}>
        <Text py={4} m={0} fontWeight={'medium'} fontSize={'20px'}>
          Dashboard
        </Text>
        {isLoading ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={<Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />}
                />
              }
              name='Doanh thu hôm nay'
              value={formatPrice(data.total_revenue_day, {
                currency: 'VND',
              })}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
                />
              }
              name='Doanh thu tháng này'
              value={formatPrice(data.total_revenue_month, {
                currency: 'VND',
              })}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={<Icon w='32px' h='32px' as={BiMoney} color={brandColor} />}
                />
              }
              name='Doanh thu năm nay'
              value={formatPrice(data.total_revenue_year, {
                currency: 'VND',
              })}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={<Icon w='32px' h='32px' as={GiReceiveMoney} color={brandColor} />}
                />
              }
              name='Tổng đơn hàng'
              value={data.total_order}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bbg={boxBg}
                  icon={<Icon w='28px' h='28px' as={BiTask} color={brandColor} />}
                />
              }
              name='Đơn hàng thành công'
              value={data.total_order_paid}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={<Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />}
                />
              }
              name='Đơn hàng thất bại'
              value={data.total_order_cancel}
            />
          </SimpleGrid>
        )}

        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <TotalSpent />
          <WeeklyRevenue />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}
