import { useState } from 'react'
import Cards from 'react-credit-cards'
import { Box, Flex, Input, Stack } from '@chakra-ui/react'

export const CreditCardForm = () => {
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleCvcChange = (e: any) => {
    setCvc(e.target.value)
  }

  const handleExpiryChange = (e: any) => {
    setExpiry(e.target.value)
  }

  const handleFocusChange = (e: any) => {
    setFocus(e.target.name)
  }

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }

  const handleNumberChange = (e: any) => {
    setNumber(e.target.value)
  }

  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} pt={8}>
      <Box flex={6}>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          locale={{
            valid: 'Hết hạn'
          }}
          placeholders={{
            name: 'Tên chủ thẻ'
          }}
          acceptedCards={['visa', 'mastercard']}
        />
      </Box>
      <Box flex={6}>
        <Stack spacing={2}>
          <Input
            type='tel'
            name='number'
            placeholder='Card Number'
            value={number}
            onChange={handleNumberChange}
            onFocus={handleFocusChange}
          />
          <Input
            type='text'
            name='name'
            placeholder='Card Holder Name'
            value={name}
            onChange={handleNameChange}
            onFocus={handleFocusChange}
          />
          <Input
            type='tel'
            name='expiry'
            placeholder='MM/YY Expiry'
            value={expiry}
            onChange={handleExpiryChange}
            onFocus={handleFocusChange}
          />
          <Input
            type='tel'
            name='cvc'
            placeholder='CVC'
            value={cvc}
            onChange={handleCvcChange}
            onFocus={handleFocusChange}
          />
        </Stack>
      </Box>
    </Flex>
  )
}
