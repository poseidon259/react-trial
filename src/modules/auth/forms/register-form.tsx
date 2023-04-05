import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  IconButton
} from '@chakra-ui/react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { navigationFn } from '~/routes'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFormSchema } from '~/validations'
import { useMutationRegister } from '../api/register.api'

type TRegister = {
  email: string
  password: string
  first_name: string
  last_name: string
}

export default function RegisterForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPasswordClick = () => setShowPassword(!showPassword)

  const initialValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  } as TRegister

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TRegister>({
    defaultValues: initialValues,
    resolver: zodResolver(RegisterFormSchema)
  })
  const { mutate, isLoading } = useMutationRegister()

  const handleLogin = () => {
    navigate(navigationFn.LOGIN)
  }

  const onSubmit = (data: TRegister) => {
    mutate(data)
    localStorage.setItem('email', data.email)
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      as='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <Controller
                  name='first_name'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='first_name' isRequired>
                        <FormLabel htmlFor='first_name'>First Name</FormLabel>
                        <Input {...field} id='first_name' type='text' name='first_name' />
                        {errors.first_name && <Text variant='error'>{errors.first_name.message}</Text>}
                      </FormControl>
                    </Box>
                  )}
                />
              </Box>
              <Box>
                <Controller
                  name='last_name'
                  control={control}
                  render={({ field }) => (
                    <Box w='100%'>
                      <FormControl id='last_name' isRequired>
                        <FormLabel htmlFor='last_name'>Last Name</FormLabel>
                        <Input {...field} id='last_name' type='text' name='last_name' />
                        {errors.last_name && <Text variant='error'>{errors.last_name.message}</Text>}
                      </FormControl>
                    </Box>
                  )}
                />
              </Box>
            </HStack>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Box w='100%'>
                  <FormControl id='email' isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input {...field} id='email' type='text' name='email' />
                    {errors.email && <Text variant='error'>{errors.email.message}</Text>}
                  </FormControl>
                </Box>
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Box w='100%'>
                  <FormControl id='password' isRequired>
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
                  </FormControl>
                </Box>
              )}
            />
            <Stack spacing={10} pt={2}>
              <Button
                type='submit'
                size='lg'
                bg='primary'
                color={'white'}
                _hover={{
                  bg: 'grey.400'
                }}
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link color='primary' onClick={handleLogin}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
