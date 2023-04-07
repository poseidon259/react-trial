import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import { useMemo } from 'react'

export const ProductGrid = (props: SimpleGridProps) => {
  const columns = useMemo(() => {
    return {
      base: Math.min(1, 1),
      md: Math.min(2, 2),
      lg: Math.min(3, 3),
      xl: Math.min(4, 4)
    }
  }, [props.children])

  return <SimpleGrid columns={columns} columnGap={{ base: '4', md: '6' }} rowGap={{ base: '8', md: '10' }} {...props} />
}
