import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    const navigate = useNavigate();
    const [UPIId,setUPIId]= useState('');

    const handleChange=(e)=>{
        setUPIId(e.target.value);
    }
    const handleNextButton = ()=>{
        localStorage.setItem("UPIId",UPIId);
        navigate("/enteramount");
    }
    console.log(UPIId);
  return (
    <div >
         <Box
      maxWidth={400}
      height={270}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"10px 10px 20px #ccc"}
      padding={3}
      margin={"auto"}
      marginTop={5}
      borderRadius={5}
    >
        <Typography sx={{color:'#08456f'}} margin="normal">Enter the UPI ID</Typography>
      <TextField onChange={handleChange} margin='normal' label="UPI ID" id="fullWidth"  />
      <Button onClick={handleNextButton} sx={{background:'#189ec8', color:'white'}}>Add Amount</Button>
    </Box>
   
       
    </div>
  );
}

export default Payment
