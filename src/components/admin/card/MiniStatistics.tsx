// Chakra imports
import { Flex, Stat, StatLabel, StatNumber, useColorModeValue, Text } from '@chakra-ui/react'

export const MiniStatistics = (props: any) => {
  const { startContent, endContent, name, growth, value } = props
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'secondaryGray.600'

  return (
    <Flex backgroundColor={'white'} alignItems={'center'} justifyContent={'center'} borderRadius={'3xl'}>
      {startContent}

      <Stat ms={startContent ? '18px' : '0px'} py={'20px'}>
        <StatLabel
          lineHeight='100%'
          color={textColorSecondary}
          fontSize={{
            base: 'sm'
          }}
        >
          {name}
        </StatLabel>
        <StatNumber
          color={textColor}
          fontSize={{
            base: '2xl'
          }}
        >
          {value}
        </StatNumber>
      </Stat>
      <Flex ms='auto' w='max-content'>
        {endContent}
      </Flex>
    </Flex>
  )
}
