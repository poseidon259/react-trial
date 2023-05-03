export const getPaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case '1':
      return 'Ship COD'
    case '2':
      return 'Visa/Mastercard'
    case '3':
      return 'VNPay'
  }
}
