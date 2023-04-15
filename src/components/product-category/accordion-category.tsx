import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Text
} from '@chakra-ui/react'
import { BsFillGridFill } from 'react-icons/bs'

export const AccordionCategory = (props: any) => {
  const { category, categoryChild, handleSubCategoryCallback } = props

  return (
    <>
      <Accordion allowToggle defaultIndex={0}>
        <Box pb={{ base: '4', md: '4' }} fontSize={'20px'}>
          <Icon as={BsFillGridFill} mr={'10px'} />
          <Text as='span' fontWeight={'bold'}>
            Tất cả danh mục
          </Text>
        </Box>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' color={'primary'} fontSize={'15px'}>
                {category.name}
              </Box>
              <AccordionIcon color={'primary'} />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {category.category_children.map((item: any) => (
              <Box
                py={{ base: '2', md: '2' }}
                px={{ base: '6', md: '6' }}
                cursor={'pointer'}
                key={item.id}
                fontWeight={'regular'}
                fontSize={'14px'}
                onClick={() => handleSubCategoryCallback(item.id)}
                backgroundColor={ categoryChild === item.id ? 'primary' : 'white' }
                color={ categoryChild === item.id ? 'white' : 'black' }
                borderRadius={'md'}
                w={'fit-content'}
                textAlign={'center'}
              >
                {item.name}
              </Box>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
