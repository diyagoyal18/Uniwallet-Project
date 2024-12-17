import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
const IncorrectPass = () => {
  return (
    <div>
       <Box
    maxWidth={400}
    height={270}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    boxShadow="10px 10px 20px #ccc"
    padding={3}
    margin="auto"
    marginTop={5}
    borderRadius={5}
>
        
    <DoNotDisturbIcon/>
    <Typography sx={{ color: '#08456f' }} margin="normal">
        Wrong UPI PIN</Typography>
    <Button margin='20px' sx={{ background: '#189ec8', color: 'white', marginTop:'20px' }}>Re-enter PIN</Button>
</Box>
    </div>
  )
}

export default IncorrectPass
