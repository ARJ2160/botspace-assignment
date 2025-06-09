import { useState } from 'react'

import { Box, Button, Chip, Divider, FormControl, FormControlLabel, Input, Link, Radio, RadioGroup, Switch, TextField, Typography, ToggleButtonGroup, ToggleButton, styled } from '@mui/material'

import { Smartphone } from './components/Smartphone'
import InstaPost from './components/Step1'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  const [selectedOption, setSelectedOption] = useState('specific')
  const [step, setStep] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [openingDMEnabled, setOpeningDMEnabled] = useState(true);
  const [openingDM, setOpeningDM] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨"
  );
  const [linkDM, setLinkDM] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const [value, setValue] = useState('post');

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) setValue(newValue);
  };

  const imageUrls = [
    "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-4_360x.jpg?v=1605751515",
    "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-2_360x.jpg?v=1605751489",
    "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-3_360x.jpg?v=1605751469",
    "	https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-1_360x.jpg?v=1605751503"
  ];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    backgroundColor: '#e5e7eb',
    borderRadius: 9999,
    padding: '4px',
  }));

  const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    border: 0,
    borderRadius: 9999,
    padding: '6px 16px',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    color: '#6b7280',
    '&.Mui-selected': {
      backgroundColor: '#fff',
      color: '#000',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
    },
    '&:hover': {
      backgroundColor: '#f3f4f6',
    },
  }));

  return (
    <Box className='min-h-screen max-h-fit'>
      <Sidebar />
      <Box className='grid grid-cols-3 p-3 align-start ml-22'>
        <Box className='col-span-1 max-h-screen overflow-y-auto'>

          {step >= 1 &&
            <Box>
              <div className='font-bold text-3xl'>
                When someone comments on
              </div>
              <FormControl className='text-left items-start flex justify-start'>
                <RadioGroup className='flex flex-col gap-2' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                  <Box className='bg-gray-100 p-3 pr-6 rounded-md'>
                    <FormControlLabel value='specific' control={<Radio />} label='a specific post or reel' />
                    {selectedOption === 'specific' && (
                      <Box className='bg-gray-100 p-3 pr-6 rounded-md flex justify-between items-center gap-2'>
                        {imageUrls.map((imageUrl, index) => (
                          <img
                            key={index}
                            src={imageUrl}
                            alt={`Post option ${index + 1}`}
                            className={`w-1/4 h-auto rounded-md cursor-pointer transition-all duration-300 hover:border-2 hover:border-blue-300 ${selectedImage === imageUrl
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border-2 border-transparent'
                              }`}
                            onClick={() => handleImageClick(imageUrl)}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>
                  <FormControlLabel value='any' control={<Radio />} label='any post or reel' className='bg-gray-100 p-3 pr-6 rounded-md' disabled />
                  <FormControlLabel value='next' control={<Radio />} label='next post or reel' className='bg-gray-100 p-3 pr-6 rounded-md' disabled />
                </RadioGroup>
              </FormControl>
              {step === 1 && <Button onClick={() => {
                setStep(2)
                setValue('comments')
              }}>
                Next
              </Button>}
            </Box>
          }

          {step >= 2 &&
            <Box className='flex flex-col gap-2 justify-between items-start'>
              <div className='font-bold text-3xl'>
                And this comment has
              </div>
              <FormControl className='flex justify-start items-start w-full'>
                <Box className='bg-gray-100 p-3 pr-6 rounded-md w-full '>
                  <FormControlLabel value='specific' control={<Radio />} className='bg-gray-100 p-3 pr-6 rounded-md' label='a specific word or words' />
                  {selectedOption === 'specific' && (
                    <Box className='flex flex-col justify-start items-center gap-4'>
                      <Input type='text' placeholder='Enter a word or multiple words' />
                      <p className='text-sm text-gray-500'>Use commas to separate words</p>
                      <div>
                        <p className='mb-3'>For example:</p>
                        <div className='flex justify-start items-center gap-2'>
                          <Chip label='Price' />
                          <Chip label='Link' />
                          <Chip label='Shop' />
                        </div>
                      </div>
                    </Box>
                  )}
                  <FormControlLabel value='specific' control={<Radio />} className='bg-gray-100 p-3 pr-6 rounded-md' label='any word' disabled />
                </Box>
              </FormControl>
              {step === 2 && <Button onClick={() => setStep(3)}>
                Next
              </Button>}
            </Box>
          }

          {step >= 3 && <Box>
            <div className='font-bold text-3xl'>
              They will get
            </div>
            <Box
              sx={{
                maxWidth: 400,
                borderRadius: 2,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 2,
                bgcolor: '#f3f4f6'
              }}
            >
              {/* Opening DM Section */}
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography fontWeight="bold">an opening DM</Typography>
                  <Switch checked={openingDMEnabled} onChange={(e) => setOpeningDMEnabled(e.target.checked)} />
                </Box>

                <TextField
                  multiline
                  fullWidth
                  minRows={4}
                  value={openingDM}
                  onChange={(e) => setOpeningDM(e.target.value)}
                />

                <TextField
                  fullWidth
                  placeholder="Send me the link"
                  sx={{ mt: 1 }}
                />

                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: '0.9rem', mt: 1, display: 'inline-block' }}
                >
                  Why does an opening DM matter?
                </Link>
              </Box>

              <Divider />

              {/* DM with Link Section */}
              <Box>
                <Typography fontWeight="bold" mb={1}>a DM with the link</Typography>
                <TextField
                  fullWidth
                  placeholder="Write a message"
                  value={linkDM}
                  onChange={(e) => setLinkDM(e.target.value)}
                />
                <Button variant="outlined" sx={{ mt: 1 }}>+ Add A Link</Button>
              </Box>
            </Box>
            {step === 3 && <Button onClick={() => setStep(4)}>
              Next
            </Button>}
          </Box>}

          {step >= 4 &&
            <Box>
              <div className='font-bold text-3xl'>
                Other things to automate
              </div>
              <FormControl className='flex flex-col gap-2'>
                <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Reply under the post so people feel seen and special</div>
                  <Switch />
                </Box>
                <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Reply under the post so people feel seen and special</div>
                  <Switch disabled />
                </Box> <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Reply under the post so people feel seen and special</div>
                  <Switch disabled />
                </Box> <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Reply under the post so people feel seen and special</div>
                  <Switch disabled />
                </Box>
              </FormControl>
            </Box>}
        </Box>
        <Box className='col-span-2'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#6b7280', fontWeight: 500, marginLeft: 2 }}>
              Preview
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3b82f6',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#2563eb',
                }
              }}
            >
              Go Live
            </Button>
          </Box>
          <Smartphone>
            <InstaPost
              imageUrl={selectedImage || imageUrls[0]}
              username="botspacehq"
              description={`WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging. Thanks to Meta's strides in AI and business tools, WhatsApp not only enhances personal communication but also empowers businesses with robust AI features.`}
            />
          </Smartphone>
          <StyledToggleButtonGroup
            value={value}
            exclusive
            onChange={handleChange}
          >
            <StyledToggleButton value="post">Post</StyledToggleButton>
            <StyledToggleButton value="comments">Comments</StyledToggleButton>
            <StyledToggleButton value="dm">DM</StyledToggleButton>
          </StyledToggleButtonGroup>
          {/* <Box sx={{ mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                minHeight: 'auto',
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
                '& .MuiTabs-flexContainer': {
                  gap: 1,
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#6b7280',
                  minHeight: 'auto',
                  py: 1,
                  px: 3,
                  borderRadius: '20px',
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  '&.Mui-selected': {
                    color: 'white',
                    fontWeight: 600,
                    backgroundColor: '#3b82f6',
                  },
                  '&:hover': {
                    backgroundColor: '#e5e7eb',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#2563eb',
                  }
                }
              }}
            >
              <Tab label="Post" />
              <Tab label="Comments" />
              <Tab label="DM" />
            </Tabs>
          </Box> */}
        </Box>
      </Box>
    </Box>
  )
}

export default App
