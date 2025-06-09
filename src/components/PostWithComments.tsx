import { Box } from '@mui/material';
import InstaPost from './InstaPost'; // the component with your post image
import CommentsDrawer from './CommentsDrawer'; // from previous message

const PostWithComments = ({ imageUrl, commentInput }: { imageUrl: string, commentInput: string }) => {

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 400,
      }}
    >
      {/* Your Post */}
      <InstaPost
        imageUrl={imageUrl}
        username="botspacehq"
        description="WhatsApp now connects 3 billion users..."
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '75%',
          zIndex: 3,
          bgcolor: '#000',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          boxShadow: '0 -4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <CommentsDrawer commentInput={commentInput} />
      </Box>
    </Box>
  );
};

export default PostWithComments;

