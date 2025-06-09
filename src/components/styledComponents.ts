import { Box, Button, ToggleButtonGroup, ToggleButton, styled, FormControl, FormControlLabel } from '@mui/material'


export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  backgroundColor: '#e5e7eb',
  borderRadius: 9999,
  padding: '4px',
}));

export const StyledToggleButton = styled(ToggleButton)(() => ({
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

export const FormContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minWidth: '100%',
}));

export const FormHeader = styled('div')(() => ({
  fontWeight: 700,
  fontSize: '2rem',
  color: '#000',
  marginBottom: '1.25rem',
}));

export const NextButton = styled(Button)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid #000',
  color: 'black',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.9rem',
  marginTop: '1.25rem',
}));

export const FormLabel = styled(FormControlLabel)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  textAlign: 'left',
}));