import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, HStack } from '@chakra-ui/react'
import { Rating } from './rating'
import { PriceTag } from './price-tag'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export const ProductCard = () => {
  return (
    <Center>
      <Box
        role={'group'}
        p={4}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          pos={'relative'}
          height={'300px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`
          }}
        />
        <Stack pt={4} align={'left'}>
          <Text color={'gray.500'} fontSize={'sm'} mb='0' pt='15px'>
            Name
          </Text>
          <HStack>
            <Rating defaultValue={4} size='sm' />
            <Text fontSize='sm' color={useColorModeValue('gray.600', 'gray.400')}>
              12 Reviews
            </Text>
          </HStack>
          <PriceTag price={100} salePrice={200} currency='VND' />
        </Stack>
      </Box>
    </Center>
  )
}
