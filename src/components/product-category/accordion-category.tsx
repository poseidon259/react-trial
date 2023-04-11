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
  const { category } = props

  return (
    <>
      <Accordion allowToggle defaultIndex={0}>
        <Box py={{ base: '4', md: '4' }} fontSize={'20px'}>
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
          <AccordionPanel pb={4} pl={{ base: '8', md: '8' }} >
            {category.category_children.map((item: any) => (
              <Text cursor={'pointer'} key={item.id} fontWeight={'regular'}fontSize={'14px'}>
                {item.name}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
