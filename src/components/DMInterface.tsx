import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Typography,
  Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CollectionsIcon from '@mui/icons-material/Collections';

const DMInterface = ({ openingDM, linkText, responseDM }: { openingDM: string, linkText: string, responseDM: string }) => {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        height: '100vh',
        maxWidth: 400,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #111',
        }}
      >
        <Avatar sx={{ width: 32, height: 32, mr: 1 }}>B</Avatar>
        <Typography variant="subtitle1" fontWeight="bold">
          botspacehq
        </Typography>
      </Box>

      {/* Chat content */}
      <Box
        sx={{
          flex: 1,
          px: 2,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowY: 'auto',
        }}
      >
        {/* Bot Message Bubble */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <AddCircleOutlineIcon sx={{ mt: 1 }} fontSize="small" />
          <Box
            sx={{
              bgcolor: '#1a1a1a',
              p: 1.5,
              borderRadius: 3,
              maxWidth: '80%',
            }}
          >
            {openingDM}
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#2a2a2a',
                color: '#fff',
                textTransform: 'none',
                mt: 1.5,
                '&:hover': {
                  bgcolor: '#3a3a3a',
                },
              }}
            >
              {linkText}
            </Button>
          </Box>
        </Box>

        {/* User Message Bubble */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              bgcolor: '#6a4eff',
              color: '#fff',
              px: 2,
              py: 1,
              borderRadius: 3,
              maxWidth: '70%',
            }}
          >
            <Typography fontSize="0.9rem">Send me the link</Typography>
          </Box>
        </Box>

        {/* Another bot input suggestion */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <AddCircleOutlineIcon sx={{ mt: 1 }} fontSize="small" />
          <Box
            sx={{
              bgcolor: '#1a1a1a',
              px: 2,
              py: 1,
              borderRadius: 3,
              maxWidth: '80%',
            }}
          >
            <Typography fontSize="0.9rem" color="#888">
              {responseDM || "Write a message"}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          borderTop: '1px solid #111',
          px: 1.5,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: '#000',
        }}
      >
        <IconButton sx={{ color: '#aaa' }}>
          <CameraAltIcon />
        </IconButton>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#1a1a1a',
            borderRadius: 20,
            px: 2,
          }}
        >
          <InputBase
            placeholder="Message..."
            sx={{ color: '#fff', flex: 1, py: 0.5 }}
          />
          <IconButton sx={{ color: '#aaa' }}>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton sx={{ color: '#aaa' }}>
            <CollectionsIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DMInterface;
