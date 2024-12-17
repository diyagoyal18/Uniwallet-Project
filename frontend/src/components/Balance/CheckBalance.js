import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CheckBalance = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState('');

 

  const handleNextButton = () => {
      localStorage.setItem("redirect", redirect);
      navigate("/dashboard");
  }
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
            <Typography sx={{ color: '#08456f' }} margin="15px">Amount In Wallet</Typography>
            
            $543
            <Button onClick={handleNextButton} sx={{ background: '#189ec8', color: 'white', margin:'50px' }}>Redirect To Dashboard</Button>
        </Box>
    </div>
  )
}

export default CheckBalance
