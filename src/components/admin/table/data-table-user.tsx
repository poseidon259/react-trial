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
import { useNavigate } from 'react-router'
import { Images } from '~/assets'
import { PRODUCT_STATUS_TEXT } from '~/configs'
import { fullName } from '~/helper/fullname'
import { useMutationDeleteUser } from '~/modules/admin/api/delete-user.api'

export const DataTableUser = (props: any) => {
  const { data } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [id, setId] = useState<string>('')
  const navigate = useNavigate()

  const badgeColor = (status: any) => {
    switch (status) {
      case 1:
        return 'green'
      case 2:
        return 'red'
    }
  }

  const handleToEdit = (id: string) => {
    navigate(`/admin/user/${id}/edit`)
  }

  const { mutate } = useMutationDeleteUser()

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
              <Td>Ảnh đại diện</Td>
              <Td>Họ và tên</Td>
              <Td>Email</Td>
              <Td>Trạng thái</Td>
              <Td>Hoạt động</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>
                  <Image
                    borderRadius='full'
                    boxSize='100px'
                    objectFit='cover'
                    src={item.avatar ?? Images.noImage}
                    alt={fullName(item.first_name, item.last_name)}
                  />
                </Td>
                <Td>{fullName(item.first_name, item.last_name)}</Td>
                <Td>{item.email}</Td>
                <Td>
                  <Badge colorScheme={badgeColor(item.status)}>{PRODUCT_STATUS_TEXT[item.status]}</Badge>
                </Td>

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
          <ModalHeader>Xác nhận xóa người dùng</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Bạn chắc chắc muốn xóa người dùng ?</ModalBody>

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
