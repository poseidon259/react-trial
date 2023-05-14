import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { AddUserFormSchema } from '~/validations/admin-validation'
import { useMutationEditUser } from '../../api/edit-user.api'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { useCustomToast } from '~/hooks'
import { ImageUpload } from '~/components/admin/upload/image-upload'
import { USER_STATUS } from '~/configs'

type TUser = {
  first_name: string
  last_name: string
  province_id: number
  district_id: number
  ward_id: number
  house_number: string
  phone_number: string
  email: string
  password: string
  confirm_password: string
  status: string
  avatar: File
}

export const UserEditForm = (props: any) => {
  const { data } = props

  const [provinceId, setProvinceId] = useState(0)
  const [districtId, setDistrictId] = useState(0)

  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const { toastSuccess, toastError } = useCustomToast()

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPasswordClick = () => setShowPassword(!showPassword)

  const handleProvinceChange = (e: any) => {
    setProvinceId(e.target.value)
    setDistrictId(0)
    setWards([])
    setDistricts([])
  }

  const handleDistrictChange = (e: any) => {
    setDistrictId(e.target.value)
  }

  const initialValues = {
    first_name: data.first_name,
    last_name: data.last_name,
    province_id: data.province_id,
    district_id: data.district_id,
    ward_id: data.ward_id,
    house_number: data.house_number,
    phone_number: data.phone_number,
    password: '',
    confirm_password: '',
    email: data.email,
    status: data.status,
    avatar: new File([], '')
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
  } = useForm<TUser>({
    defaultValues: initialValues,
    resolver: zodResolver(AddUserFormSchema)
  })

  const { mutate, isLoading } = useMutationEditUser()

  const onSubmit = (data: TUser) => {
    mutate(data)
  }
  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      mr={3}
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={4}>
        <HStack>
          <Controller
            name='first_name'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
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
              <Box w='50%'>
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
            name='province_id'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='province_id' isRequired>
                  <FormLabel htmlFor='province_id'>Thành phố</FormLabel>
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
                {errors.province_id && <Text variant='error'>{errors.province_id.message}</Text>}
              </Box>
            )}
          />
          <Controller
            name='district_id'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='district_id' isRequired>
                  <FormLabel htmlFor='district_id'>Quận/Huyện</FormLabel>
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
                {errors.district_id && <Text variant='error'>{errors.district_id.message}</Text>}
              </Box>
            )}
          />
          <Controller
            name='ward_id'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='ward_id' isRequired>
                  <FormLabel htmlFor='ward_id'>Phường/Xã</FormLabel>
                  <Select
                    {...field}
                    placeholder={'Chọn phường/xã'}
                    textTransform={'capitalize'}
                    onChange={(e) => {
                      field.onChange(e)
                    }}
                  >
                    {wards.map((ward: any) => (
                      <option key={ward.id} value={ward.id}>
                        {ward.name}
                      </option>
                    ))}
                  </Select>
                  {errors.ward_id && <Text variant='error'>{errors.ward_id.message}</Text>}
                </FormControl>
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='house_number'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='house_number' isRequired>
                  <FormLabel htmlFor='house_number'>Số nhà</FormLabel>
                  <Input {...field} id='house_number' type='text' name='house_number' />
                </FormControl>
                {errors.house_number && <Text variant='error'>{errors.house_number.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
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
        </HStack>
        <HStack>
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='password' isRequired>
                  <FormLabel htmlFor='password'>Mật khẩu</FormLabel>
                  <InputGroup>
                    <Input {...field} type={showPassword ? 'text' : 'password'} />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={handleShowPasswordClick}
                        variant='ghost'
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && <Text variant='error'>{errors.password.message}</Text>}
                </FormControl>
              </Box>
            )}
          />
          <Controller
            name='confirm_password'
            control={control}
            render={({ field }) => (
              <Box w='100%'>
                <FormControl id='confirm_password' isRequired>
                  <FormLabel htmlFor='confirm_password'>Xác nhận mật khẩu</FormLabel>
                  <InputGroup>
                    <Input {...field} type={showPassword ? 'text' : 'password'} />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={handleShowPasswordClick}
                        variant='ghost'
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.confirm_password && <Text variant='error'>{errors.confirm_password.message}</Text>}
                </FormControl>
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='status'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='status' isRequired>
                  <FormLabel htmlFor='status'>Trạng thái người dùng</FormLabel>
                  <RadioGroup
                    onChange={(e) => {
                      field.onChange(e)
                    }}
                    value={field.value.toString()}
                  >
                    <Stack direction='row'>
                      {USER_STATUS.map((option: any) => (
                        <Radio key={option.id} value={option.id.toString()}>
                          {option.name}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </FormControl>
                {errors.status && <Text variant='error'>{errors.status.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <HStack>
          <Controller
            name='avatar'
            control={control}
            render={({ field }) => (
              <Box w='50%'>
                <FormControl id='avatar' isRequired>
                  <FormLabel htmlFor='avatar'>Ảnh</FormLabel>
                  <ImageUpload displayButton={1} multiple={false} onChange={(file: File) => field.onChange(file)} />
                </FormControl>
                {errors.avatar && <Text variant='error'>{errors.avatar.message}</Text>}
              </Box>
            )}
          />
        </HStack>

        <Button type='submit' backgroundColor={'blue.500'} color={'white'} w={'120px'} isLoading={isLoading}>
          Sửa
        </Button>
      </Stack>
    </Box>
  )
}
