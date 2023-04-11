import { Button, FormControl, FormLabel, Stack } from '@chakra-ui/react'

export const MasterField = (props: any) => {
  const { product, masterFieldCallback, masterField } = props

  const handleMasterFieldClick = (masterFieldId: any) => {
    if (masterField === masterFieldId) {
      masterFieldCallback(null)
    } else {
      masterFieldCallback(masterFieldId)
    }
  }

  return (
    <>
      {product.master_fields.map((field: any) => (
        <FormControl id={field.id} key={field.id}>
          <FormLabel fontSize='md' textTransform={'capitalize'}>
            {field.name}
          </FormLabel>
          <Stack direction='row' spacing={2}>
            {field.childs.map((child: any) => (
              <Button
                key={child.id}
                size='md'
                variant={ masterField === child.id ? 'solid' : 'outline'}
                onClick={() => handleMasterFieldClick(child.id)}
                textTransform={'capitalize'}
              >
                {child.name}
              </Button>
            ))}
          </Stack>
        </FormControl>
      ))}
    </>
  )
}
