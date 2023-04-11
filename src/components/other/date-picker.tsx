import { DatePicker } from 'chakra-ui-date-input'

export const CustomDatePicker = (props: any) => {
  const { placeholder, name } = props
  return <DatePicker placeholder={placeholder} name={name} mb={'10px'} />
}
