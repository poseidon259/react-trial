import { Box, Button, Table, Tbody, Td, Thead, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { OrderStatusBadge } from '~/components/order/order-status-badge'
import { formatPrice } from '~/components/other/price-tag'
import { fullName } from '~/helper/fullname'
import { getPaymentMethod } from '~/helper/getPaymentMethod'

export const DataTableOrder = (props: any) => {
  const navigate = useNavigate()
  const { data } = props

  const handleToView = (id: string) => {
    navigate(`/admin/order/${id}`)
  }

  const handleToEdit = (id: string) => {
    navigate(`/admin/order/${id}/edit`)
  }

  return (
    <Box  mx={'auto'}>
      <VStack align='stretch' backgroundColor={'white'}>
        <Table variant='simple'>
          <Thead>
            <Tr fontWeight={'bold'}>
              <Td>Mã đơn hàng</Td>
              <Td>Số điện thoại</Td>
              <Td>Tổng tiền</Td>
              <Td>Phương thức</Td>
              <Td>Trạng thái</Td>
              <Td>Hoạt động</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any) => (
              <Tr key={item.id}>
                <Td>{item.order_no}</Td>
                <Td>{item.phone_number}</Td>
                <Td>{formatPrice(item.total, {
                    currency: 'VND'
                })}</Td>
                <Td>{getPaymentMethod(item.payment_method ? item.payment_method.toString() : '')}</Td>
                <Td>
                  <OrderStatusBadge status={item.status} />
                </Td>
                <Td>
                  <Button colorScheme='teal' size='sm' onClick={() => handleToView(item.id)}>
                    Xem
                  </Button>{' '}
                  <Button colorScheme='telegram' size='sm' onClick={() => handleToEdit(item.id)}>
                    Sửa
                  </Button>{' '}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  )
}
