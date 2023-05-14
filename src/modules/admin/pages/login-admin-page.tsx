import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutationLogin } from '~/modules/auth/api'
import { LoginFormSchema } from '~/validations'
import {
  Box,
  Button,
  Container,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Logo } from '~/components/login/logo'
import { LOGIN_EMAIL, SYSTEM_ADMIN } from '~/configs'
import { navigationFn } from '~/routes'
import { useCustomToast } from '~/hooks'
import { isObjectEmpty } from '~/helper/isObjectEmpty'

type TLogin = {
  email: string
  password: string
  type: number
  system: number
}

export const LoginPageAdmin = () => {
  const navigate = useNavigate()
  const admin = JSON.parse(localStorage.getItem('user') || '{}')
  const { toastSuccess, toastError } = useCustomToast()

  useEffect(() => {
    if (!isObjectEmpty(admin) && admin.role === SYSTEM_ADMIN) {
      toastError('Bạn đã đăng nhập')
      navigate(navigationFn.ADMIN_DASHBOARD)
    }
  }, [])

  const initialValues = {
    email: '',
    password: '',
    type: 0,
    system: 1
  } as TLogin

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPasswordClick = () => setShowPassword(!showPassword)

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TLogin>({
    defaultValues: initialValues,
    resolver: zodResolver(LoginFormSchema)
  })

  const { mutate, isLoading } = useMutationLogin()

  const onSubmit = (data: TLogin) => {
    data.type = LOGIN_EMAIL
    data.system = SYSTEM_ADMIN
    mutate(data)
  }

  return (
    <Container
      as='form'
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <HStack alignItems='center' justifyContent={'center'} cursor='pointer'>
        <Logo />
        <Text fontWeight='regular' fontSize='xl' textTransform='uppercase'>
          Trial
        </Text>
      </HStack>
      <Stack spacing='8'>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Box w='100%'>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input {...field} id='email' type='text' name='email' />
                    {errors.email && <Text variant='error'>{errors.email.message}</Text>}
                  </Box>
                )}
              />

              <Controller
                name='password'
                control={control}
                render={({ field }) => (
                  <Box w='100%'>
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
                  </Box>
                )}
              />
            </Stack>
            <Stack spacing='6'>
              <Button
                color='white'
                backgroundColor='primary'
                _hover={{ bg: 'white', color: 'primary' }}
                type='submit'
                isLoading={isLoading}
                w='100%'
              >
                Đăng nhập
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
