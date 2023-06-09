import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import { Box, Image, Text } from '@chakra-ui/react'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export const ImageUpload = (props: any) => {
  const { onChange, data, displayButton, multiple } = props

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>(data)

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
    setFileList(newFileList)
    if (newFileList.length > 0) {
      if (multiple) {
        const files: File[] = []
        newFileList.forEach((file) => {
          files.push(file.originFileObj as RcFile)
        })
        onChange(files)
      } else {
        const file = newFileList[0].originFileObj as RcFile
        onChange(file)
        setPreviewTitle(file.name )
      }
    } else {
      onChange(undefined)
      setPreviewTitle('')
    }
  }

  const uploadButton = (
    <Box>
      <PlusOutlined />
      <Box mt={'8px'}>Tải ảnh lên</Box>
    </Box>
  )

  return (
    <>
      <Upload
        fileList={fileList}
        listType='picture-card'
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={() => false}
      >
        { fileList == undefined || fileList.length < displayButton ? uploadButton : null}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <Image alt='image upload' style={{ width: '100%' }} src={previewImage} />
      </Modal>
      {!multiple && <Text>{previewTitle}</Text>}
    </>
  )
}
