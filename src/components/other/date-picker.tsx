import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './css/date-picker.scss'
import { Box } from '@chakra-ui/react'

export const CustomDatePicker = (props: any) => {
  const { placeholder, name, value, callback } = props

  return (
    <Box pb={'10px'}>
      <DatePicker selected={value} placeholderText={placeholder} onChange={(date) => callback(date)} />
    </Box>
  )
}
