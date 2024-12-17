import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useNavigate } from 'react-router-dom';
const PaymentDone = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState('');

 

  const handleNextButton = () => {
      localStorage.setItem("redirect", redirect);
      navigate("/dashboard");
  }
  return (
    <>
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
        <DoneAllIcon/>
    <Typography sx={{ color: '#08456f' }} margin="normal">
        Payment Done!</Typography>
    
    <Button onClick={handleNextButton} margin='20px' sx={{ background: '#189ec8', color: 'white', marginTop:'20px' }}>Redirect To Dashboard</Button>
</Box>
        </>
  )
}

export default PaymentDone
