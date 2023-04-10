import { Box, Text } from "@chakra-ui/react"
import { CommentCard } from "./comment-card"

export const ListCommentCard = (props: any) => {
    const { comments } = props

    return (
        <Box>
            {comments.map((comment: any) => (
                <Box key={comment.id} p='10px' bg='white' borderRadius='10px' mb='10px'>
                    <CommentCard comment={ comment }  />
                </Box>
            ))}
        </Box>
    )
}