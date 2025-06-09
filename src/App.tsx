import { useState, lazy } from 'react'

import { Box, Button, Chip, FormControl, FormControlLabel, Link, Radio, RadioGroup, Switch, TextField, Typography } from '@mui/material'
import { Info } from '@mui/icons-material'

import { InstaPost, Smartphone, FormContainer, FormHeader, NextButton, StyledToggleButton, StyledToggleButtonGroup } from './components'
import Sidebar from './Sidebar'
import './App.css'
import { Chips } from './components/Chips'

const imageUrls = [
  "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-4_360x.jpg?v=1605751515",
  "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-2_360x.jpg?v=1605751489",
  "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-3_360x.jpg?v=1605751469",
  "https://cdn.shopify.com/s/files/1/0421/6153/7180/files/cate-df-1_360x.jpg?v=1605751503"
];

const PostWithComments = lazy(() => import('./components/PostWithComments'));
const DMInterface = lazy(() => import('./components/DMInterface'));

function App() {
  const [selectedOption, setSelectedOption] = useState('specific')
  const [commentInput, setCommentInput] = useState('')
  const [step, setStep] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(imageUrls[0])
  const [openingDMEnabled, setOpeningDMEnabled] = useState(true);
  const [openingDM, setOpeningDM] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨"
  );
  const [linkDM, setLinkDM] = useState('Send me the link');
  const [responseDM, setResponseDM] = useState('')

  const [value, setValue] = useState('post');

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) setValue(newValue);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };


  return (
    <Box className='min-h-screen max-h-fit'>
      <Sidebar />
      <Box className='grid grid-cols-3 align-start ml-22'>
        <Box className='col-span-1 max-h-screen overflow-y-auto space-y-5 p-4'>

          {step >= 1 &&
            <FormContainer>
              <FormHeader>
                When someone comments on
              </FormHeader>
              <FormControl className='text-left items-start flex justify-start '>
                <RadioGroup className='flex flex-col gap-2' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                  <Box className='bg-gray-100 p-3 pr-6 rounded-md'>
                    <FormControlLabel value='specific' control={<Radio sx={{ color: '#6b7280', '&.Mui-checked': { color: '#000' } }} />} className='mr-6' label='a specific post or reel' />
                    {selectedOption === 'specific' && (
                      <Box className='bg-gray-100 p-3 pl-0 rounded-md flex justify-start items-center gap-5'>
                        {imageUrls.map((imageUrl, index) => (
                          <img
                            key={index}
                            src={imageUrl}
                            alt={`Post option ${index + 1}`}
                            className={`w-1/6 h-auto rounded-md cursor-pointer transition-all duration-300 hover:border-2 hover:border-blue-300 ${selectedImage === imageUrl
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border-2 border-transparent'
                              }`}
                            onClick={() => handleImageClick(imageUrl)}
                          />
                        ))}
                      </Box>
                    )}
                    <div className='text-sm text-blue-500 cursor-pointer'>Show All</div>
                  </Box>
                  <FormControlLabel value='any' control={<Radio sx={{ color: '#6b7280', '&.Mui-checked': { color: '#000' } }} />} label={
                    <div className='flex items-center gap-2 w-full'>
                      <div>any post or reel</div>
                      <Chips classNames='bg-blue-500 rounded-sm p-1 text-white'>PRO</Chips>
                    </div>
                  } className='bg-gray-100 p-3 !m-0 rounded-md' disabled />
                  <FormControlLabel value='next' control={<Radio sx={{ color: '#6b7280', '&.Mui-checked': { color: '#000' } }} />} label={
                    <div className='flex items-center gap-2 w-full'>
                      <div>next post or reel</div>
                      <Chips classNames='bg-blue-500 rounded-sm p-1 text-white'>PRO</Chips>
                    </div>
                  } className='bg-gray-100 p-3 !m-0 rounded-md' disabled />
                </RadioGroup>
              </FormControl>
              {step === 1 && (
                <NextButton onClick={() => {
                  setStep(2)
                  setValue('comments')
                }}>
                  Next
                </NextButton>
              )}
            </FormContainer>
          }

          {step >= 2 &&
            <FormContainer>
              <FormHeader>
                And this comment has
              </FormHeader>
              <FormControl className='flex justify-start items-start text-left w-full'>
                <Box className='bg-gray-100 p-3 pr-6 rounded-md w-full'>
                  <FormControlLabel value='specific' checked control={<Radio sx={{ color: '#6b7280', '&.Mui-checked': { color: '#000' } }} />} className='bg-gray-100 p-3 pr-6 pl-0 rounded-md mx-0 items-start' label='a specific word or words' />
                  <Box className='flex flex-col gap-2'>
                    <TextField
                      type='text'
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      placeholder='Enter a word or multiple words'
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f8f9fa',
                          borderRadius: '8px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                          },
                          '&.Mui-focused fieldset': {
                            border: '1px solid #d1d5db',
                          },
                        },
                        '& .MuiInputBase-input': {
                          padding: '12px 16px',
                          fontSize: '14px',
                          '&::placeholder': {
                            color: '#9ca3af',
                            opacity: 1,
                          },
                        },
                      }}
                    />
                    <p className='text-sm text-gray-500'>Use commas to separate words</p>
                    <div>
                      <p className='mb-3'>For example:</p>
                      <div className='flex justify-start items-center gap-2'>
                        <Chip sx={{
                          background: '#edf6ff',
                          border: '1px solid #a1cbf3',
                        }}
                          onClick={() => setCommentInput("Price")}
                          label='Price' />
                        <Chip
                          sx={{
                            background: '#edf6ff',
                            border: '1px solid #a1cbf3',
                          }}
                          onClick={() => setCommentInput("Link")}
                          label='Link' />
                        <Chip
                          sx={{
                            background: '#edf6ff',
                            border: '1px solid #a1cbf3',
                          }}
                          onClick={() => setCommentInput("Shop")}
                          label='Shop' />
                      </div>
                    </div>
                  </Box>
                  <FormControlLabel value='specific' control={<Radio sx={{ color: '#6b7280', '&.Mui-checked': { color: '#000' } }} />} className='bg-gray-100 p-3 pr-6 rounded-md' label='any word' disabled />
                </Box>
              </FormControl>
              {step === 2 && <NextButton disabled={!commentInput} onClick={() => {
                setStep(3)
                setValue('dm')
              }}>
                Next
              </NextButton>}
            </FormContainer>
          }

          {step >= 3 &&
            <FormContainer>
              <FormHeader>
                They will get
              </FormHeader>
              <Box className='flex flex-col gap-2 w-full'>
                <Box className='bg-gray-100 p-3 pr-6 rounded-md'>
                  <Box className='flex justify-between items-center'>
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
                    value={linkDM}
                    placeholder="Send me the link"
                    sx={{ mt: 1 }}
                    onChange={(e) => setLinkDM(e.target.value)}
                  />

                  <Link
                    href="#"
                    underline="hover"
                    sx={{ fontSize: '0.9rem', mt: 1, display: 'inline-block', cursor: 'pointer', alignItems: 'start' }}
                  >
                    <Info /> Why does an opening DM matter?
                  </Link>
                </Box>

                {/* DM with Link Section */}
                <Box className='bg-gray-100 p-3 pr-6 rounded-md w-full'>
                  <Typography fontWeight="bold" mb={1} align='left'>a DM with the link</Typography>
                  <TextField
                    fullWidth
                    multiline
                    placeholder="Write a message"
                    value={responseDM}
                    onChange={(e) => setResponseDM(e.target.value)}
                  />
                  <Button variant="outlined" sx={{ mt: 1 }}>+ Add A Link</Button>
                </Box>
              </Box>
              {step === 3 && <NextButton onClick={() => setStep(4)}>
                Next
              </NextButton>}
            </FormContainer>}

          {step >= 4 &&
            <FormContainer>
              <FormHeader>
                Other things to automate
              </FormHeader>
              <FormControl className='flex flex-col gap-2 w-[100%]'>
                <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Reply under the post so people feel seen and special</div>
                  <Switch />
                </Box>
                <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Follow up to re-engage and build trust</div>
                  <div className='flex items-center gap-2'>
                    <Chips classNames='bg-blue-500 rounded-sm p-1 text-white'>PRO</Chips>
                    <Switch disabled />
                  </div>
                </Box> <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Automatically ask for a follow to build your audience</div>
                  <div className='flex items-center gap-2'>
                    <Chips classNames='bg-blue-500 rounded-sm p-1 text-white'>PRO</Chips>
                    <Switch disabled />
                  </div>
                </Box> <Box className='flex justify-between items-center bg-gray-200 p-3 pr-6 rounded-md'>
                  <div>Ask for emails in DMs to keep in touch beyond social media</div>
                  <div className='flex items-center gap-2'>
                    <Chips classNames='bg-blue-500 rounded-sm p-1 text-white'>PRO</Chips>
                    <Switch disabled />
                  </div>
                </Box>
              </FormControl>
            </FormContainer>}
        </Box>

        <Box className='col-span-2 bg-gray-200 max-h-fit min-h-screen p-4'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#6b7280', fontWeight: 500, marginLeft: 2 }}>
              Preview
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                textTransform: 'none',
                border: '1px solid gray',
                fontWeight: 800,
                fontSize: '1rem',
                px: 3,
                py: 1,
                borderRadius: 2,
              }}
            >
              Go Live
            </Button>
          </Box>

          <Smartphone>
            {step === 1 && <InstaPost
              imageUrl={selectedImage || imageUrls[0]}
              username="botspacehq"
              description={`WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging. Thanks to Meta's strides in AI and business tools, WhatsApp not only enhances personal communication but also empowers businesses with robust AI features.`}
            />}
            {step === 2 && <PostWithComments imageUrl={selectedImage || imageUrls[0]} commentInput={commentInput} />}
            {(step === 3 || step === 4) && <DMInterface openingDM={openingDM} linkText={linkDM} responseDM={responseDM} />}
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
        </Box>
      </Box>
    </Box>
  )
}

export default App
