import { Box, Flex, Link } from '@chakra-ui/react'

export const VNPayForm = () => {
  const url =
    'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=100000000&vnp_Command=pay&vnp_CreateDate=20230424102247&vnp_CurrCode=VND&vnp_IpAddr=172.18.0.1&vnp_Locale=vn&vnp_OrderInfo=Noi+dung+thanh+toan&vnp_OrderType=topup&vnp_ReturnUrl=http%3A%2F%2Flocalhost%3A5173%2Fcheckout%2Fsuccess%3Fcode%3D15KTgXDSciQl&vnp_TmnCode=GAPL1ENK&vnp_TxnRef=15KTgXDSciQl&vnp_Version=2.1.0&vnp_SecureHash=c40024e9c4299042177b6006a71fc666d0123ad9ac61c267db3bc1e6a682004881e93f2236b03a028e058418d2e2df3cd5e59ffc3f3b2ded1d94e3e7e738f330'
  return (
    <Flex justifyContent='center' mt={4}>
      {/* <Box as={'iframe'} title='VNPay Payment' src={url} width='100%' height='600' frameBorder='0' /> */}
      <Link href={url}>VNpay</Link>
    </Flex>
  )
}
