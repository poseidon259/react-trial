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
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' color={'primary'}>
                <Icon as={BsFillGridFill} mr={'10px'} />
                {category.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {category.category_children.map((item: any) => (
              <Text cursor={'pointer'} key={item.id} fontWeight={'regular'} pl={{ base: '8', md: '8' }}>
                { item.name }
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
