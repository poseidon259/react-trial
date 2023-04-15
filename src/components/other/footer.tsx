import { Box, Button, ButtonGroup, Divider, IconButton, Input, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from '../login/logo'

export const Footer = () => (
  <Box as='section' px={{ base: '12', md: '12' }}>
    <Box as='footer' bg='bg-surface'>
      <Stack
        spacing='8'
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align='start' w={'40%'}>
          <Logo />
          <Text fontWeight={'light'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </Text>
        </Stack>
        <Stack direction={{ base: 'column-reverse', md: 'column', lg: 'row' }} spacing={{ base: '12', md: '8' }}>
          <Stack direction='row' spacing='8'>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Product
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>How it works</Button>
                <Button variant='link'>Pricing</Button>
                <Button variant='link'>Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Legal
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>Privacy</Button>
                <Button variant='link'>Terms</Button>
                <Button variant='link'>License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing='4'>
            <Text fontSize='sm' fontWeight='semibold' color='subtle'>
              Stay up to date
            </Text>
            <Stack spacing='4' direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
              <Input placeholder='Enter your email' type='email' required />
              <Button variant='primary' type='submit' flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack pt='8' pb='4' justify='space-between' direction={{ base: 'column-reverse', md: 'row' }} align='center'>
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} Trial, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant='ghost'>
          <IconButton as='a' href='#' aria-label='LinkedIn' icon={<FaLinkedin fontSize='1.25rem' />} />
          <IconButton as='a' href='#' aria-label='GitHub' icon={<FaGithub fontSize='1.25rem' />} />
          <IconButton as='a' href='#' aria-label='Twitter' icon={<FaTwitter fontSize='1.25rem' />} />
        </ButtonGroup>
      </Stack>
    </Box>
  </Box>
)
