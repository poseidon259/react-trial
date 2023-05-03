import { Box, Text, Stack, Flex, useColorModeValue, Icon, Button } from '@chakra-ui/react'
import { BiSortAlt2 } from 'react-icons/bi'
import { OrderStatusBadge } from './order-status-badge'
import { useNavigate } from 'react-router'
import { formatPrice } from '../other/price-tag'

export const OrderHistoryList = (props: any) => {
  const navigate = useNavigate()
  const { orders } = props

  const handleViewOrderDetail = (id: number) => {
    navigate(`/order-history/${id}`)
  }
  const headerItems = [
    { label: 'Mã đơn hàng', key: 'order_no', flex: 4 },
    { label: 'Ngày đặt đơn', key: 'date', flex: 2 },
    { label: 'Tổng tiền', key: 'total', flex: 2 },
    { label: 'Trạng thái', key: 'status', flex: 2 },
    { label: '', key: 'action', flex: 1 }
  ]

  const renderHeaderItem = ({ label, key, flex }: { label: string; key: string; flex: number }) => (
    <Box key={key} fontWeight='bold' display='flex' alignItems='center' flex={flex}>
      {label}
      {label && <Icon as={BiSortAlt2} ml={1} cursor={'pointer'} />}
    </Box>
  )

  const renderOrderItem = (data: any) => (
    <Stack
      key={data.id}
      p={4}
      border='1px'
      boxShadow='md'
      rounded='md'
      mb={4}
      borderColor={'gray.300'}
    >
      <Flex direction='row'>
        <Box fontWeight='bold' cursor={'pointer'} flex={4} onClick={() => handleViewOrderDetail(data.id)}>
          Order #{data.order_no}
        </Box>
        <Box fontWeight='normal' flex={2}>
          {new Date(data.created_at).toLocaleDateString('en-US')}
        </Box>
        <Box fontWeight='normal' flex={2}>
        {formatPrice(data.total, {
            currency: 'VND'
          })}
        </Box>
        <Box fontWeight='normal' flex={2}>
          <OrderStatusBadge status={data.status} />
        </Box>
        <Box fontWeight='normal' flex={1}>
          <Button colorScheme='teal' size='sm' onClick={() => handleViewOrderDetail(data.id)}>
            Chi tiết
          </Button>
        </Box>
      </Flex>
    </Stack>
  )

  return (
    <Box>
      <Text fontWeight='bold' fontSize='2xl' mb={4} textAlign='center'>
        Lịch sử đơn hàng
      </Text>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        boxShadow='md'
        backgroundColor='gray.200'
        borderRadius='md'
        p={4}
        mb={4}
      >
        {headerItems.map(renderHeaderItem)}
      </Flex>

      <Box>{orders.map(renderOrderItem)}</Box>
    </Box>
  )
}
