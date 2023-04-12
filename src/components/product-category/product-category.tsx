import { Box, Button, Select } from '@chakra-ui/react'
import { CustomSelect } from '../other/CustomSelect'
import { useState } from 'react'
import { SortProductCategory } from './sort-product-category'
import { ProductCategoryList } from './product-category-list'

export const ProductCategory = (props: any) => {
  const { products } = props
  const [popular, setPopular] = useState(false)
  const [newest, setNewest] = useState(true)
  const [selectedValue, setSelectedValue] = useState('')
  const options = [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' }
  ]

  const handlePopular = () => {
    setPopular(!popular)
    setNewest(false)
  }

  const handleNewest = () => {
    setPopular(false)
    setNewest(!newest)
  }

  const handleChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <>
      <SortProductCategory
        popular={popular}
        newest={newest}
        options={options}
        handlePopularCallback={handlePopular}
        handleNewestCallback={handleNewest}
        handleChangeCallback={handleChange}
      />
      <ProductCategoryList products={products} max={3} />
    </>
  )
}
