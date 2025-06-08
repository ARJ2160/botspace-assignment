import React, { useState } from 'react';

import { Box, IconButton, Avatar } from '@mui/material';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import SettingsIconOutlined from '@mui/icons-material/SettingsOutlined';
import PersonIconOutlined from '@mui/icons-material/PersonOutlined';
import ChatIconOutlined from '@mui/icons-material/ChatOutlined';
import SendIconOutlined from '@mui/icons-material/SendOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';

import logo from './assets/file.svg';

const navItems = [
  { icon: <HomeIconOutlined />, label: 'Home' },
  { icon: <PersonIconOutlined />, label: 'User' },
  { icon: <ChatIconOutlined />, label: 'Chat' },
  { icon: <SendIconOutlined />, label: 'Send' },
  { icon: <SettingsIconOutlined />, label: 'Settings' },
];

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        width: 90,
        height: '100vh',
        background: 'linear-gradient(to bottom, #f7f8fa 0%, #e9ebee 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRight: '1px solid #e0e0e0',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000,
        py: 2,
        px: 0,
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ mt: 1, mb: 5, borderBottom: '1px solid #e0e0e0', width: '100%' }}>
        <img style={{ width: 70, height: 70, display: 'block', margin: '0 auto' }} src={logo} alt="logo" />
      </Box>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FlareOutlinedIcon sx={{ fontSize: 30, color: '#757575' }} />
          <Box sx={{
            position: 'absolute',
            top: 24,
            right: -18,
            bgcolor: '#e0e3e7',
            color: '#222',
            fontSize: 11,
            fontWeight: 700,
            borderRadius: '4px',
            px: 1,
            py: '2px',
            border: '1px solid #cfd8dc',
            boxShadow: 1,
          }}>
            FREE
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, pt: 1, borderTop: '1px solid #e0e0e0', width: '100%' }}>
        {navItems.map((item, idx) => (
          <IconButton
            key={item.label}
            color={activeIndex === idx ? 'primary' : 'default'}
            onClick={() => setActiveIndex(idx)}
            sx={{
              color: activeIndex === idx ? '#1976d2' : '#757575',
              bgcolor: activeIndex === idx ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
              borderRadius: 2,
              mb: 1,
              transition: 'background 0.2s',
              fontSize: 28,
              p: 2,
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
      <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: '#e57373', width: 40, height: 40 }}>
          <PersonIconOutlined />
        </Avatar>
        <IconButton sx={{ color: '#757575', bgcolor: '#f5f7fa', border: '1px solid #e0e0e0', width: 36, height: 36 }}>
          <QuestionMarkOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar; 