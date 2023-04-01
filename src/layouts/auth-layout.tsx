import React from 'react'
import Icon from '@chakra-ui/icon'
import { Box, HStack, Spinner, VStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { usePromiseTracker } from 'react-promise-tracker'
import { Icons, Images } from '~/assets'


export const AuthLayout = () => {
  const { promiseInProgress } = usePromiseTracker()
  console.log('auth')

  return (
    <HStack w='100%' h='100vh' bg='primary'>
      <Box w='50%' h='100%' bgImage={`url(${Images.authBg})`} bgPos='center' bgRepeat='no-repeat' bgSize='cover'></Box>
      <VStack w='50%' p={8} borderRadius='8px'>
        <Icon as={Icons.logo} />
        <Icon as={Icons.textSecondaryLogo} />
        <Outlet />
      </VStack>
      {promiseInProgress && <Spinner size='xl' color='primaryLight' pos='fixed' bottom={4} right={4} />}
    </HStack>
  )
}
