export const navigationFn = {
  HOME: '/',

  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  REGISTER: '/register',
  VERIFY_CODE: '/verify-code',
  RESET_PASSWORD: '/reset-password',

  PRODUCT_DETAIL: '/product/:id',
  PRODUCT_CATEGORY: '/category/:id/products',

  STORE_DETAIL: '/store/:id',

  CART: '/cart',
  CHECKOUT: '/checkout',
  CHECKOUT_VNPAY: '/checkout/payment_vn_pay',
  ORDER_HISTORY: '/order-history',
  ORDER_DETAIL: '/order-history/:id',

  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_BRAND: '/admin/brand',
  ADMIN_ADD_BRAND: '/admin/brand/new',
  ADMIN_EDIT_BRAND: '/admin/brand/:id/edit',

  ADMIN_PRODUCT: '/admin/product',
  ADMIN_ADD_PRODUCT: '/admin/product/new',
  ADMIN_EDIT_PRODUCT: '/admin/product/:id/edit',

  HOME_INFORMATION: '/home',
  CHANGE_PASSWORD: '/admin/change-password',

  BABY_TRACKER: '/baby-tracker',
  ADD_CHECKUP: '/baby-tracker/add',
  EDIT_CHECKUP: '/baby-tracker/:id',

  SIZE_COMPARISON: '/size-comparison',
  SIZE_COMPARISON_DETAIL: '/size-comparison/:id',

  USER_MANAGE: '/user',
  USER_INFO: '/user/:id',

  EDITORIAL_MANAGE: '/editorial-management',
  ADD_ARTICLE: '/editorial-management/add',
  ARTICLE_DETAIL: '/editorial-management/:id',

  VIDEO_MANAGE: '/videos',
  VIDEO_DETAIL: '/videos/:id',
  VIDEO_EDIT: '/videos/edit/:id',
  CREATE_VIDEO: '/videos/add',
  VIDEO_BY_WEEK: '/videos/week/:week',

  FORUM_MANAGE: '/forums',
  CREATE_FORUM: '/forums/add',
  FORUM_DETAIL: '/forums/:id',

  INTERACTIVE_ROOM: '/interactive-room',

  PODCAST: '/podcast',
  CREATE_PODCAST: '/podcast/add',
  EDIT_PODCAST: '/podcast/:id',

  BROADCAST: '/broadcast',
  CREATE_BROADCAST: '/broadcast/add',
  VIEW_BROADCAST: '/broadcast/:id',

  REPORT: '/report'
}
