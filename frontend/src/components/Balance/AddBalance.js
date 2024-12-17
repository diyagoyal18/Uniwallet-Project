import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBalance = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState('');

  const handleChange = (e) => {
      setBalance(e.target.value);
  }

  const handleNextButton = () => {
      localStorage.setItem("balance", balance);
      navigate("/auth");
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
            <Typography sx={{ color: '#08456f' }} margin="normal">Add Amount In Wallet</Typography>
            <TextField
                onChange={handleChange}
                margin="normal"
                label="Amount"
                id="fullWidth"
            />
            <Button onClick={handleNextButton} sx={{ background: '#189ec8', color: 'white' }}>Add</Button>
        </Box>
    </div>
  )
}

export default AddBalance
