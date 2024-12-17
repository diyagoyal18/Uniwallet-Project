import React, { useState } from 'react'
import { TextField,Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [verify, setVerify] = useState('');

 

  const handleNextButton = () => {
      localStorage.setItem("verify", verify);
      navigate("/done");
  }
  return (
    <Box  maxWidth={400}
    height={270}
    display="flex"
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    boxShadow={"10px 10px 20px #ccc"}
    padding={3}
    margin={"auto"}
    marginTop={5}
    borderRadius={5}>
        <h1>Enter Passcode </h1>
      <TextField id="outlined-basic" label="Pin" variant="outlined" margin="normal" type='password'/>
      <Button onClick={handleNextButton} variant="contained" size="large" sx={{background:'#189ec8', color:'white'}} >Validate</Button>
    </Box>
  )
}
