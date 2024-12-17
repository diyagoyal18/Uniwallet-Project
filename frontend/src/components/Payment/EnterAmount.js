import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EnterAmount = () => {
    const navigate = useNavigate();
    const [payment, setPayment] = useState('');

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    const handleNextButton = () => {
        localStorage.setItem("payment", payment);
        navigate("/auth");
    }

    return (
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
            <Typography sx={{ color: '#08456f' }} margin="normal">Enter Amount</Typography>
            <TextField
                onChange={handleChange}
                margin="normal"
                label="Amount"
                id="fullWidth"
            />
            <Button onClick={handleNextButton} sx={{ background: '#189ec8', color: 'white' }}>Pay</Button>
        </Box>
    );
}

export default EnterAmount;
