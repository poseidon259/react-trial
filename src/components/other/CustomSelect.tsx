import { Select } from '@chakra-ui/select'

export const CustomSelect = (props: any) => {
  const { options, placeholder, handleChangeCallback } = props

  return (
    <Select
      cursor={'pointer'}
      placeholder={placeholder}
      size='md'
      backgroundColor={'white'}
      color={'primary'}
      _hover={{
        backgroundColor: 'white'
      }}
      onChange={(e) => handleChangeCallback(e.target.value)}
    >
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
