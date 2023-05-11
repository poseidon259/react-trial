import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutationDeleteBrand } from '~/modules/admin/api/delete-brand.api'

export const DataTableBrand = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [id, setId] = useState<string>('')
  const navigate = useNavigate()
  const { data } = props

  const handleToEdit = (id: string) => {
    navigate(`/admin/brand/${id}/edit`)
  }

  const { mutate } = useMutationDeleteBrand()

  const handleToDelete = (id: string) => {
    setId(id)
  }

  const handleConfirmDelete = () => {
    mutate(id)
    onClose()
  }

  return (
    <Box maxW={'95%'} mx={'auto'}>
      <VStack align='stretch' backgroundColor={'white'}>
        <Table variant='simple'>
          <Thead>
            <Tr fontWeight={'bold'}>
              <Td>Ảnh thương hiệu</Td>
              <Td>Tên thương hiệu</Td>
              <Td>Hoạt động</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any) => (
              <Tr key={item.id}>
                <Td>
                  <Image boxSize='100px' objectFit='contain' src={item.image} alt={item.name} />
                </Td>
                <Td>{item.name}</Td>
                <Td>
                  <Button colorScheme='telegram' size='sm' onClick={() => handleToEdit(item.id)}>
                    Sửa
                  </Button>{' '}
                  <Button
                    colorScheme='red'
                    size='sm'
                    onClick={() => {
                      onOpen()
                      handleToDelete(item.id)
                    }}
                  >
                    Xóa
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Xác nhận xóa thương hiệu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Bạn chắc chắc muốn xóa thương hiệu ?</ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Hủy bỏ
            </Button>
            <Button colorScheme='blue' onClick={handleConfirmDelete}>
              Xác nhận
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
