import {
  Box,
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Add, HomeFilled, Movie, Person, Search } from '@mui/icons-material';

interface InstaPostProps {
  imageUrl: string;
  username: string;
  description: string;
}

const InstaPost = ({ imageUrl, username, description }: InstaPostProps) => {
  return (
    <Card sx={{ maxWidth: 400, bgcolor: '#000', color: '#fff', borderRadius: 0 }}>
      <CardHeader
        avatar={<Avatar src={`https://i.pravatar.cc/150?u=${username}`} />}
        title={<div>{username}</div>}
        subheader={<div className='text-white font-bold'>Posts</div>}
        sx={{ py: 2, mt: 3 }}
      />
      <CardMedia
        component="img"
        className='!h-[430px]'
        image={imageUrl}
        alt="Post"
      />
      <CardContent sx={{ p: 1}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'  }}>
          <Box>
            <IconButton sx={{ color: '#fff', fontSize: '1rem' }}><FavoriteBorderIcon /><div className='ml-1'>18</div> </IconButton>
            <IconButton sx={{ color: '#fff', fontSize: '1rem' }}><ChatBubbleOutlineIcon /></IconButton>
            <IconButton sx={{ color: '#fff', fontSize: '1rem' }}><SendIcon /></IconButton>
          </Box>
          <IconButton sx={{ color: '#fff' }}><BookmarkBorderIcon /></IconButton>
        </Box>

        <div className='text-sm text-gray-500'>
          <span className='font-bold text-white'>{username}</span> {description}
        </div>
      </CardContent>

      <CardActions className='flex justify-between items-center w-full !px-10'>
        <HomeFilled />
        <Search />
        <Add />
        <Movie />
        <Person />
      </CardActions>
    </Card>
  );
};

export default InstaPost;
