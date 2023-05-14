import {
  Badge,
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
import { PRODUCT_STATUS_TEXT } from '~/configs'
import { useMutationDeleteProduct } from '~/modules/admin/api/delete-product.api'

export const DataTableProduct = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [id, setId] = useState<string>('')
  const navigate = useNavigate()
  const { data } = props

  const badgeColor = (status: any) => {
    switch (status) {
      case 1:
        return 'green'
      case 2:
        return 'red'
    }
  }

  const handleToEdit = (id: string) => {
    navigate(`/admin/product/${id}/edit`)
  }

  const { mutate } = useMutationDeleteProduct()

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
              <Td>ID</Td>
              <Td>Ảnh sản phẩm</Td>
              <Td>Tên sản phẩm</Td>
              <Td>Thương hiệu</Td>
              <Td>Trạng thái</Td>
              <Td>Mã sản phẩm</Td>
              <Td>Tồn loại</Td>
              <Td>Hoạt động</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>
                  <Image boxSize='100px' objectFit='contain' src={item.product_images[0].image} alt={item.name} />
                </Td>
                <Td>{item.name}</Td>
                <Td>{item.category_name}</Td>
                <Td>
                  <Badge colorScheme={badgeColor(item.status)}>{PRODUCT_STATUS_TEXT[item.status]}</Badge>
                </Td>
                <Td>{item.product_code}</Td>
                <Td>{item.master_fields.length > 0 ? 'Có' : 'Không'}</Td>
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
          <ModalHeader>Xác nhận xóa sản phẩm</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Bạn chắc chắc muốn xóa sản phẩm ?</ModalBody>

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
