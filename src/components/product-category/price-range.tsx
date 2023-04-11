import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text
} from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'

export const PriceRange = (props: any) => {
  const { values, range, callback } = props

  const handleChange = (newValues: number[]) => {
    callback(newValues)
  }

  return (
    <Box>
      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={values}
        onChange={handleChange}
        min={range[0]}
        max={range[1]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0}>
          <Box as={MdGraphicEq} />
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1}>
          <Box as={MdGraphicEq} />
        </RangeSliderThumb>
      </RangeSlider>
      <Flex justifyContent='space-between'>
        <Text>{values[0]}</Text>
        <Text>{values[1]}</Text>
      </Flex>
    </Box>
  )
}
