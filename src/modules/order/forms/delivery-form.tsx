import {
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Stack,
  Heading,
  Box,
  HStack,
  Flex,
  Textarea,
  Select,
  Button,
  Text
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CheckoutOrderSumary } from '~/components/order/checkout-order-sumary'
import { ProductPayment } from '~/components/order/product-payment'
import { isObjectEmpty } from '~/helper/isObjectEmpty'
import { useCustomToast } from '~/hooks'
import axiosClient from '~/libs/axios/axiosClient'
import { DeliveryFormSchema } from '~/validations/checkout-validation'

type TDelivery = {
  first_name: string
  last_name: string
  province: number
  district: number
  ward: number
  house_number: string
  phone_number: string
  email: string
  note: string
}

export const DeliveryForm = (props: any) => {
  const { checkoutData, nextStep, activeStep, prevStep, isLastStep, handleDeliveryData, deliveryData } = props
  const { toastSuccess, toastError } = useCustomToast()
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])

  const [provinceId, setProvinceId] = useState(0)
  const [districtId, setDistrictId] = useState(0)

  const initialValues = {
    first_name: '',
    last_name: '',
    province: 0,
    district: 0,
    ward: 0,
    house_number: '',
    phone_number: '',
    email: '',
    note: ''
  }

  const handleProvinceChange = (e: any) => {
    setProvinceId(e.target.value)
    setWards([])
    setDistricts([])
  }

  const handleDistrictChange = (e: any) => {
    setDistrictId(e.target.value)
  }

  useEffect(() => {
    axiosClient
      .get('public/provinces')
      .then((res: any) => {
        setProvinces(res)
      })
      .catch((err) => {
        toastError(err.reponse.data.message)
      })
  }, [])

  useEffect(() => {
    if (provinceId !== 0 && provinceId) {
      axiosClient
        .get(`public/districts/${provinceId}`)
        .then((res: any) => {
          setDistricts(res)
        })
        .catch((err) => {
          toastError(err.reponse.data.message)
        })
    }
  }, [provinceId])

  useEffect(() => {
    if (districtId !== 0 && districtId) {
      axiosClient
        .get(`public/wards/${districtId}`)
        .then((res: any) => {
          setWards(res)
        })
        .catch((err) => {
          toastError(err.reponse.data.message)
        })
    }
  }, [provinceId, districtId])

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TDelivery>({
    defaultValues: isObjectEmpty(deliveryData) ? initialValues : deliveryData,
    resolver: zodResolver(DeliveryFormSchema)
  })

  const onSubmit = (data: TDelivery) => {
    handleDeliveryData(data)
    nextStep()
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} as='form' w={'full'} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={8} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Thông tin vận chuyển
          </Heading>
        </Stack>
        <Flex>
          <Box flex={8} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} mr={3}>
            <Stack spacing={4}>
              <HStack>
                <Controller
                  name='first_name'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='first_name' isRequired>
                        <FormLabel htmlFor='first_name'>Họ</FormLabel>
                        <Input {...field} id='first_name' type='text' name='first_name' />
                      </FormControl>
                      {errors.first_name && <Text variant='error'>{errors.first_name.message}</Text>}
                    </Box>
                  )}
                />
                <Controller
                  name='last_name'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='last_name' isRequired>
                        <FormLabel htmlFor='last_name'>Tên</FormLabel>
                        <Input {...field} id='last_name' type='text' name='last_name' />
                      </FormControl>
                      {errors.last_name && <Text variant='error'>{errors.last_name.message}</Text>}
                    </Box>
                  )}
                />
              </HStack>
              <HStack>
                <Controller
                  name='province'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='province' isRequired>
                        <FormLabel htmlFor='province'>Thành phố</FormLabel>
                        <Select
                          {...field}
                          placeholder={'Chọn thành phố'}
                          textTransform={'capitalize'}
                          onChange={(e) => {
                            field.onChange(e)
                            handleProvinceChange(e)
                          }}
                        >
                          {provinces.map((province: any) => (
                            <option key={province.province_id} value={province.province_id}>
                              {province.name}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      {errors.province && <Text variant='error'>{errors.province.message}</Text>}
                    </Box>
                  )}
                />
                <Controller
                  name='district'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='district' isRequired>
                        <FormLabel htmlFor='district'>Quận/Huyện</FormLabel>
                        <Select
                          {...field}
                          placeholder={'Chọn quận/huyện'}
                          textTransform={'capitalize'}
                          onChange={(e) => {
                            field.onChange(e)
                            handleDistrictChange(e)
                          }}
                        >
                          {districts.map((district: any) => (
                            <option key={district.district_id} value={district.district_id}>
                              {district.name}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      {errors.district && <Text variant='error'>{errors.district.message}</Text>}
                    </Box>
                  )}
                />
                <Controller
                  name='ward'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='ward' isRequired>
                        <FormLabel htmlFor='ward'>Phường/Xã</FormLabel>
                        <Select
                          {...field}
                          placeholder={'Chọn phường/xã'}
                          textTransform={'capitalize'}
                          onChange={(e) => {
                            field.onChange(e)
                            // handleMasterFieldClick(e.target.value)
                          }}
                        >
                          {wards.map((ward: any) => (
                            <option key={ward.id} value={ward.id}>
                              {ward.name}
                            </option>
                          ))}
                        </Select>
                        {errors.ward && <Text variant='error'>{errors.ward.message}</Text>}
                      </FormControl>
                    </Box>
                  )}
                />
              </HStack>
              <Controller
                name='house_number'
                control={control}
                render={({ field }) => (
                  <Box w='100%'>
                    <FormControl id='house_number' isRequired>
                      <FormLabel htmlFor='house_number'>Địa chỉ chi tiết</FormLabel>
                      <Input {...field} id='house_number' type='text' name='house_number' />
                    </FormControl>
                    {errors.house_number && <Text variant='error'>{errors.house_number.message}</Text>}
                  </Box>
                )}
              />
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Box w='100%'>
                    <FormControl id='email' isRequired>
                      <FormLabel htmlFor='email'>Email</FormLabel>
                      <Input {...field} id='email' type='text' name='email' />
                    </FormControl>
                    {errors.email && <Text variant='error'>{errors.email.message}</Text>}
                  </Box>
                )}
              />
              <Controller
                name='phone_number'
                control={control}
                render={({ field }) => (
                  <Box w='100%'>
                    <FormControl id='phone_number' isRequired>
                      <FormLabel htmlFor='phone_number'>Số điện thoại</FormLabel>
                      <Input {...field} id='phone_number' type='text' name='phone_number' />
                    </FormControl>
                    {errors.phone_number && <Text variant='error'>{errors.phone_number.message}</Text>}
                  </Box>
                )}
              />
              <Controller
                name='note'
                control={control}
                render={({ field }) => (
                  <Box w='100%'>
                    <FormControl id='note'>
                      <FormLabel htmlFor='note'>Ghi chú</FormLabel>
                      <Textarea {...field} id='note' name='note' rows={5} resize={'none'} />
                    </FormControl>
                    {errors.note && <Text variant='error'>{errors.note.message}</Text>}
                  </Box>
                )}
              />
            </Stack>
          </Box>
          <Box flex={'4'} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Box
              maxHeight='250px'
              overflowY='scroll'
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px'
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#FFC0CB',
                  borderRadius: '24px'
                }
              }}
            >
              {checkoutData.cart_items &&
                checkoutData.cart_items.map((item: any) => (
                  <Box key={item.id} pb={7}>
                    <ProductPayment value={item} />
                  </Box>
                ))}
            </Box>

            <Box>
              <CheckoutOrderSumary value={checkoutData} />
            </Box>
          </Box>
        </Flex>

        <Flex justifyContent={'end'}>
          <Button isDisabled={activeStep === 0} onClick={prevStep} size='sm' variant='ghost'>
            Trước
          </Button>
          <Button size='sm' type='submit'>
            {isLastStep ? 'Hoàn thành' : 'Tiếp theo'}
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}
