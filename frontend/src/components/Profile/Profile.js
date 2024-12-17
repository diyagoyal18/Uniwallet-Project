import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Fab, Slider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 45,
      label: '45',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  

const Profile = () => {
    const navigate = useNavigate();
    const [addBalance,setAddBalance]= useState('');
    const [checkBalance,setCheckBalance]= useState('');

    const handleNextButton = ()=>{
        localStorage.setItem("addBalance",addBalance);
        navigate("/addBalance");
    }
    const handleNxtBtn = ()=>{
        localStorage.setItem("checkBalance",checkBalance);
        navigate("/checkBalance");
    }
  return (
    <div className=' flex justify-between'>
        <Box sx={{display:'flex', flexWrap:'wrap', flexDirection:'row'}}>
        <Box >
       <Card  sx={{  maxWidth: 345, margin:'40px', maxHeight:'400px', width:'500px', height:'300px'}}>
      <PersonOutlineIcon sx={{width:'100px'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Himani
        </Typography>
        <Typography margin={'normal'} variant="body2" color="text.secondary">
            Email ID
        </Typography>
        <Typography margin={'normal'} variant="body2" color="text.secondary">
        UPI ID
        </Typography>
      </CardContent>
    </Card>
        </Box>
    <Box sx={{display:'flex', flexWrap:'wrap',}}> 
        <Box display={'flex'} sx={{margin:'normal'}} >
    <Card sx={{ maxWidth: 345, margin:'40px', maxHeight:'400px',width:'700px', height:'300px'}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Risk Factor
        </Typography>
        <Slider
  aria-label="Custom marks"
  defaultValue={20}
  //   getAriaValueText={5}
  step={10}
  valueLabelDisplay="auto"
  marks={marks}
/>{
    console.log(marks)
    
}
      </CardContent>
      <CardActions>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin:'40px', maxHeight:'400px', width:'500px', height:'300px'}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fraction To Be Invested 
        </Typography>
        <Slider
  aria-label="Custom marks"
  defaultValue={20}
  //   getAriaValueText={5}
  step={10}
  valueLabelDisplay="auto"
  marks={marks}
/>{
    console.log(marks)
    
}
      </CardContent>
      <CardActions>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Box>
        <Box display={'flex'} sx={{margin:'normal'}}>

    <Card sx={{ display:'flex', maxWidth: 345, margin:'40px', maxHeight:'400px', width:'500px', height:'150px', flexDirection:'column'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Add Balance To Wallet 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      
<Fab onClick={handleNextButton} sx={{color:"#097978"}} aria-label="add">
  <AddIcon />
</Fab>
      </CardContent>
    </Card>
    <Card sx={{ display:'flex', maxWidth: 345, margin:'40px', maxHeight:'400px', width:'500px', height:'150px', flexDirection:'column'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Check Wallet Balance
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      
        <Fab onClick={handleNxtBtn} variant="extended">
  <ArrowRightIcon sx={{ mr: 1 }} />
  
</Fab>
      </CardContent>
    </Card>
        </Box>
    </Box>
    </Box>
    </div>
  )
}

export default Profile
