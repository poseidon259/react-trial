import { Badge } from '@chakra-ui/react'
import { ORDER_STATUS_COLOR, ORDER_STATUS_TEXT } from '~/configs'

export const OrderStatusBadge = (props: any) => {
  const { status } = props
  return <Badge ml={'10px'} color={ORDER_STATUS_COLOR[status]}>{ORDER_STATUS_TEXT[status]}</Badge>
}
