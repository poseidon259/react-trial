import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { UpdateOrderStatusFormSchema } from '~/validations/admin-validation'
import { useMutationEditStatusOrder } from '../../api/update-order-status.api'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import { ORDER_STATUS_OBJECT } from '~/configs'
import { formatPrice } from '~/components/other/price-tag'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { useCustomToast } from '~/hooks'
import { RxDot } from 'react-icons/rx'
import { OrderStatusBadge } from '~/components/order/order-status-badge'
import { getPaymentMethod } from '~/helper/getPaymentMethod'


export const OrderViewForm = (props: any) => {
  const { data } = props

  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const { toastSuccess, toastError } = useCustomToast()

  useEffect(() => {
    axiosClient
      .get('public/provinces')
      .then((res: any) => {
        setProvinces(res)
      })
      .catch((err) => {
        toastError(err.reponse.data.message)
      })

    axiosClient
      .get(`public/districts/${data.province_id}`)
      .then((res: any) => {
        setDistricts(res)
      })
      .catch((err) => {
        toastError(err.reponse.data.message)
      })

    axiosClient
      .get(`public/wards/${data.district_id}`)
      .then((res: any) => {
        setWards(res)
      })
      .catch((err) => {
        toastError(err.reponse.data.message)
      })
  }, [])


  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      mr={3}
    >
      <Stack spacing={4}>

        <HStack>
          <Box w='50%'>
            <FormControl id='order_no' isRequired>
              <FormLabel htmlFor='order_no'>Mã đơn hàng</FormLabel>
              <Input id='order_no' type='text' name='order_no' isDisabled value={data.order_no} />
            </FormControl>
          </Box>

          <Box w='50%'>
            <FormControl id='total' isRequired>
              <FormLabel htmlFor='total'>Tổng tiền</FormLabel>
              <Input
                id='total'
                type='text'
                name='total'
                isDisabled
                value={formatPrice(data.total, {
                  currency: 'VND'
                })}
              />
            </FormControl>
          </Box>
        </HStack>

        <HStack>
          <Box w='50%'>
            <FormControl id='first_name' isRequired>
              <FormLabel htmlFor='first_name'>Họ</FormLabel>
              <Input id='first_name' type='text' name='first_name' isDisabled value={data.first_name} />
            </FormControl>
          </Box>

          <Box w='50%'>
            <FormControl id='last_name' isRequired>
              <FormLabel htmlFor='last_name'>Tên</FormLabel>
              <Input id='last_name' type='text' name='last_name' isDisabled value={data.last_name} />
            </FormControl>
          </Box>
        </HStack>

        <Text>
          {' '}
          <Icon as={RxDot} /> Địa chỉ giao hàng
        </Text>
        <HStack>
          <Box w='100%'>
            <FormControl id='province_id' isRequired>
              <FormLabel htmlFor='province_id'>Thành phố</FormLabel>
              <Select
                placeholder={'Chọn thành phố'}
                textTransform={'capitalize'}
                value={data.province_id.toString()}
                isDisabled
              >
                {provinces.map((province: any) => (
                  <option key={province.province_id} value={province.province_id}>
                    {province.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box w='100%'>
            <FormControl id='district_id' isRequired>
              <FormLabel htmlFor='district_id'>Quận/Huyện</FormLabel>
              <Select
                placeholder={'Chọn quận/huyện'}
                textTransform={'capitalize'}
                value={data.district_id.toString()}
                isDisabled
              >
                {districts.map((district: any) => (
                  <option key={district.district_id} value={district.district_id}>
                    {district.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box w='100%'>
            <FormControl id='ward_id' isRequired>
              <FormLabel htmlFor='ward_id'>Phường/Xã</FormLabel>
              <Select
                placeholder={'Chọn phường/xã'}
                textTransform={'capitalize'}
                value={data.ward_id.toString()}
                isDisabled
              >
                {wards.map((ward: any) => (
                  <option key={ward.id} value={ward.id}>
                    {ward.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </HStack>

        <HStack>
          <Box w='100%'>
            <FormControl id='house_number' isRequired>
              <FormLabel htmlFor='house_number'>Số nhà</FormLabel>
              <Input id='house_number' type='text' name='house_number' isDisabled value={data.house_number ?? ''} />
            </FormControl>
          </Box>
        </HStack>

        <HStack>
          <Box w={'100%'}>
            <FormControl id='email' isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input id='email' type='email' name='email' isDisabled value={data.email} />
            </FormControl>
          </Box>

          <Box w={'100%'}>
            <FormControl id='phone_numner' isRequired>
              <FormLabel htmlFor='phone_numner'>Số điện thoại</FormLabel>
              <Input id='phone_numner' type='text' name='phone_numner' isDisabled value={data.phone_number} />
            </FormControl>
          </Box>
        </HStack>

        <HStack>
          <Box w={'100%'}>
            <FormControl id='note'>
              <FormLabel htmlFor='note'>Ghi chú</FormLabel>
              <Textarea isDisabled id='note' name='note' rows={5} resize={'none'} />
            </FormControl>
          </Box>
        </HStack>

        <Text>
          {' '}
          <Icon as={RxDot} /> Thông tin khác
        </Text>

        <Text fontSize={'14'}>
          Phương thức thanh toán:{' '}
          <Text as={'span'} fontWeight={'normal'}>{`${getPaymentMethod(data.payment_method + '')}`}</Text>
        </Text>
        <Text fontSize={'14'}>
          Nội dung thanh toán: <Text as={'span'} fontWeight={'normal'}>{`${data.payment_note ?? ''}`}</Text>
        </Text>
        <Text fontSize={'14'}>
          Tổng tiền sản phẩm:{' '}
          <Text as={'span'} fontWeight={'normal'} fontSize={'xl'}>{`${formatPrice(data.sub_total, {
            locale: 'VN',
            currency: 'VND'
          })}`}</Text>
        </Text>
        <Text fontSize={'14'}>
          Phí ship:{' '}
          <Text as={'span'} fontWeight={'normal'} fontSize={'xl'}>{`${formatPrice(data.delivery_fee, {
            locale: 'VN',
            currency: 'VND'
          })}`}</Text>
        </Text>
        <Text fontSize={'14'}>
          Tổng tiền:{' '}
          <Text as={'span'} fontWeight={'normal'} fontSize={'xl'}>{`${formatPrice(data.total, {
            locale: 'VN',
            currency: 'VND'
          })}`}</Text>
        </Text>

        <Text fontSize={'14'}>
          Trạng thái đơn hàng:
          <OrderStatusBadge status={data.status} />
        </Text>

        <Text fontSize={'14'}>
          Trạng thái thanh toán:
          <Text as={'span'} fontWeight={'normal'} pl={'10px'} color={data.payment_date ? 'teal.300' : 'facebook.300'}>
            {data.payment_date ? 'Đã thanh toán' : 'Chưa thanh toán'}
          </Text>
        </Text>
      </Stack>
    </Box>
  )
}
