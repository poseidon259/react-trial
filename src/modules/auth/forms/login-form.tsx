import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Logo } from '~/components/login/logo'
import { OAuthButtonGroup } from '~/components/login/o-auth-button-gr'
import { LoginFormSchema } from '~/validations'
import { useMutationLogin } from '../api'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { LOGIN_EMAIL, SYSTEM_USER } from '~/configs'
import { useLocation, useNavigate } from 'react-router'
import { navigationFn } from '~/routes'

type TLogin = {
  email: string
  password: string
  type: number
  system: number
}

export const LoginForm = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: localStorage.getItem('email') ?? '',
    password: '',
    type: 0,
    system: 0
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
    data.system = SYSTEM_USER
    mutate(data)
  }

  const handleRegister = () => {
    navigate(navigationFn.REGISTER)
  }

  return (
    <Container
      as='form'
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
            <HStack spacing='1' justify='center'>
              <Text color='#4A5568'>Don't have an account?</Text>
              <Button variant='link' colorScheme='blue' onClick={handleRegister}>
                <Text color='muted'>Sign up</Text>
              </Button>
            </HStack>
          </Stack>
        </Stack>
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
                    <FormLabel htmlFor='password'>Password</FormLabel>
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
            <HStack justify='space-between'>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button
                color='white'
                backgroundColor='primary'
                _hover={{ bg: 'white', color: 'primary' }}
                type='submit'
                isLoading={isLoading}
                w='100%'
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
