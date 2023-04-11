import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Icon, Text } from '@chakra-ui/react'
import { TbFilter } from 'react-icons/tb'
import { useState } from 'react'
import { PriceRange } from './price-range'
import { CustomDatePicker } from '../other/date-picker'
import { Rating } from '../other/rating'

export const FilterProductCategory = (props: any) => {
  const [values, setValues] = useState([1000000, 30000000])
  const range = [1, 50000000]

  const handleChange = (newValues: number[]) => {
    setValues(newValues)
  }

  return (
    <>
      <Accordion allowToggle={false} defaultIndex={[0, 1, 2]}>
        <Box py={{ base: '4', md: '4' }} fontSize={'20px'}>
          <Icon as={TbFilter} mr={'10px'} />
          <Text as='span' fontWeight={'bold'}>
            Bộ lọc tìm kiếm
          </Text>
        </Box>
        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontSize={'15px'}>
              Khoảng giá bán
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <PriceRange values={values} range={range} callback={handleChange} />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontSize={'15px'}>
              Ngày đăng bán
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box>
              <Text fontSize={'14px'} fontWeight={'regular'}>
                Từ
              </Text>
              <CustomDatePicker placeholder={'Chọn ngày bắt đầu'} name={'date_start'} />
            </Box>
            <Box>
              <Text fontSize={'14px'} fontWeight={'regular'}>
                Đến
              </Text>
              <CustomDatePicker placeholder={'Chọn ngày kết thúc'} name={'date_end'} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontSize={'15px'}>
              Đánh giá
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Rating defaultValue={5} />
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={4} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2'>
                trở lên
              </Text>
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={3} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2'>
                trở lên
              </Text>
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={2} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2'>
                trở lên
              </Text>
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={1} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2'>
                trở lên
              </Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <Box w={'full'} pt={{ base: '4', md: '4' }}>
          <Button
          w={'full'}
            size='md'
            color={'white'}
            backgroundColor={'primary'}
            textTransform={'capitalize'}
          >
            Lọc
          </Button>
        </Box>
      </Accordion>
    </>
  )
}
