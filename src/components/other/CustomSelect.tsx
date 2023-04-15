import { Select } from '@chakra-ui/select'

export const CustomSelect = (props: any) => {
  const { options, placeholder, sortPrice, handleChangeCallback } = props

  const handleChange = (e: any) => {
    handleChangeCallback(e.target.value)
  }

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
      onChange={(e) => handleChange(e)}
      value={sortPrice}
    >
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
