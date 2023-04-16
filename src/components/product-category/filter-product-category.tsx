import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Icon,
  Radio,
  Text
} from '@chakra-ui/react'
import { TbFilter } from 'react-icons/tb'
import { PriceRange } from './price-range'
import { CustomDatePicker } from '../other/date-picker'
import { Rating } from '../other/rating'

export const FilterProductCategory = (props: any) => {
  const {
    handlePriceRangeCallback,
    priceRange,
    range,
    dateStart,
    dateEnd,
    rating,
    handleDateStartCallback,
    handleDateEndCallback,
    handleFilterRatingCallback
  } = props

  const handleFilterRating = (value: number) => {
    handleFilterRatingCallback(value)
  }

  const handlePriceChange = (newValues: number[]) => {
    handlePriceRangeCallback(newValues)
  }

  const handleDateStart = (date: string) => {
    handleDateStartCallback(date)
  }

  const handleDateEnd = (date: string) => {
    handleDateEndCallback(date)
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
            <PriceRange values={priceRange} range={range} callback={handlePriceChange} />
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
              <CustomDatePicker
                value={dateStart}
                placeholder={'Chọn ngày bắt đầu'}
                name={'date_start'}
                callback={handleDateStart}
              />
            </Box>
            <Box>
              <Text fontSize={'14px'} fontWeight={'regular'}>
                Đến
              </Text>
              <CustomDatePicker
                value={dateEnd}
                placeholder={'Chọn ngày kết thúc'}
                name={'date_end'}
                callback={handleDateEnd}
              />
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
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={5} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2' pr={'63px'}></Text>
              <Checkbox value={5} isChecked={rating == 5} onChange={() => handleFilterRating(5)} />
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={4} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2' pr={'20px'}>
                trở lên
              </Text>
              <Checkbox value={4} isChecked={rating == 4} onChange={() => handleFilterRating(4)} />
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={3} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2' pr={'20px'}>
                trở lên
              </Text>
              <Checkbox value={3} isChecked={rating == 3} onChange={() => handleFilterRating(3)} />
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={2} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2' pr={'20px'}>
                trở lên
              </Text>
              <Checkbox value={2} isChecked={rating == 2} onChange={() => handleFilterRating(2)} />
            </Box>
            <Box display='flex' alignItems='center' pt={'5px'}>
              <Rating defaultValue={1} />
              <Text as='span' fontSize='14px' fontWeight='regular' ml='2' pr={'20px'}>
                trở lên
              </Text>
              <Checkbox value={1} isChecked={rating == 1} onChange={() => handleFilterRating(1)} />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
