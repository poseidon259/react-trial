export const SIDEBAR_WIDTH = '290px'
export const SIDEBAR_COLLAPSED_WIDTH = '80px'
export const LOGIN_EMAIL = 1
export const SYSTEM_USER = 4
export const SYSTEM_ADMIN = 1
export const LIMIT_PER_PAGE_PRODUCT = 12
export const LIMIT_PER_PAGE_COMMENT = 5
export const LIMIT_PER_PAGE_PRODUCT_CATEGORY = 6
export const LIMIT_PER_PAGE_STORE_PRODUCT = 12
export const TRUE = 1
export const FALSE = 0

export const PAYMENT_METHOD = {
  COD: '1',
  CARD: '2',
  VNPAY: '3'
}

export const ORDER_STATUS = {
  NEW: 1,
  PAID: 2,
  SHIPPING: 3,
  DELIVERED: 4,
  CANCELLED: 5
}

export const ORDER_STATUS_TEXT = ['', 'Đang chờ thanh toán', 'Đã xác nhận', 'Đang giao hàng', 'Đã giao hàng', 'Đã hủy']

export const ORDER_STATUS_COLOR = ['', 'orange.300', 'primary', 'teal.300', 'green.300', 'red.600']

export const PRODUCT_STATUS = [
  {
    id: 1,
    name: 'Công khai'
  },
  {
    id: 2,
    name: 'Riêng tư'
  }
]

export const PRODUCT_STATUS_TEXT = ['', 'Công khai', 'Riêng tư']

export const USER_STATUS = [
  {
    id: 1,
    name: 'Hoạt động'
  },
  {
    id: 2,
    name: 'Không hoạt động'
  }
]

export const USER_STATUS_TEXT = ['', 'Hoạt động', 'Không hoạt động']

