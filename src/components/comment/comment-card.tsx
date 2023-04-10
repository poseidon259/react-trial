import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { Rating } from '../other/rating'
import { fullName } from '~/helper/fullname'
import { formatDate } from '~/helper/formatDate'

export const CommentCard = (props: any) => {
  const { comment } = props
  return (
    <Center>
      <Box w='100%' boxShadow='md' rounded='md'>
        <Flex p='6' align='center'>
          <Image
            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp'
            alt='avatar'
            boxSize='60px'
            rounded='full'
            mr='3'
            shadow='md'
          />
          <Box>
            <Text fontWeight='bold' color='primary.500' mb='1'>
              { fullName(comment.first_name, comment.last_name)  }
            </Text>
            <Rating defaultValue={ comment.rating } />
            <Text color='gray.500' fontSize='sm' mb='0'>
              { formatDate(comment.updated_at) }
            </Text>
          </Box>
        </Flex>
        <Box p='6'>
          <Text mb='4' pb='2' fontWeight={'regular'}>
            { comment.content }
          </Text>
        </Box>
      </Box>
    </Center>
  )
}
