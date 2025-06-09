import {
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';

const emojiList = ['❤️', '🙌', '🔥', '👏', '🥲', '😍', '😮', '😂', '🔥', '👏'];

const CommentsDrawer = ({ commentInput }: { commentInput: string }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: '#000',
        color: '#fff',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #333',
          py: 1,
        }}
      >
        <Box sx={{ width: 40, height: 4, bgcolor: '#444', borderRadius: 2, mb: 0.5 }} />
        <Typography variant="body1" fontWeight="bold">
          Comments
        </Typography>
      </Box>

      {/* Comment Section */}
      <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32 }} />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" fontWeight="bold">
                Username
              </Typography>
              <Typography variant="caption" color="#888">
                Now
              </Typography>
            </Box>
            <Typography align='left' variant="body2">{commentInput}</Typography>
            <Typography align='left' variant="subtitle1" color="#888" sx={{ cursor: 'pointer', fontSize: '0.8rem' }}>
              Reply
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: '#888' }}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Emoji Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 1, py: 1, gap: 1 }}>
        {emojiList.map((emoji, index) => (
          <Typography key={index} sx={{ fontSize: '1.2rem', cursor: 'pointer' }}>
            {emoji}
          </Typography>
        ))}
      </Box>

      {/* Input Field */}
      <Box sx={{ px: 2, pb: 2 }}>
        <TextField
          fullWidth
          placeholder="Add a comment for username..."
          variant="outlined"
          size="small"
          sx={{
            bgcolor: '#1a1a1a',
            borderRadius: 9999,
            input: { color: '#fff' },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton sx={{ color: '#888' }}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default CommentsDrawer;
