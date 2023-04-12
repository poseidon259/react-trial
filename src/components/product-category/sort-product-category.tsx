import { Box, Button } from '@chakra-ui/react'
import { CustomSelect } from '../other/CustomSelect'

export const SortProductCategory = (props: any) => {
  const { popular, newest, options, handlePopularCallback, handleNewestCallback, handleChangeCallback } = props
  return (
    <Box
      as='form'
      display={'flex'}
      backgroundColor={'gray.200'}
      borderRadius={'md'}
      alignItems={'center'}
      alignContent={'center'}
      height={'60px'}
    >
      <Box px={{ base: '4', md: '4' }} fontWeight={'bold'}>
        Sắp xếp
      </Box>
      <Box>
        <Button
          fontSize={'14px'}
          backgroundColor={newest ? 'blue.300' : 'white'}
          color={newest ? 'white' : 'primary'}
          onClick={() => handleNewestCallback()}
          _hover={{}}
        >
          Mới nhất
        </Button>
      </Box>
      <Box pl={{ base: '4', md: '4' }}>
        <Button
          fontSize={'14px'}
          backgroundColor={popular ? 'blue.300' : 'white'}
          color={popular ? 'white' : 'primary'}
          onClick={() => handlePopularCallback()}
          _hover={{}}
        >
          Bán chạy
        </Button>
      </Box>
      <Box pl={{ base: '4', md: '4' }}>
        <CustomSelect options={options} placeholder={'Theo giá'} handleChangeCallback={handleChangeCallback} />
      </Box>
    </Box>
  )
}
