import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useNavigate } from 'react-router-dom';



export default function Deposits() {
  const navigate = useNavigate();
  const [balance,setBalance]= React.useState('');

  const handleNextButton = ()=>{
      localStorage.setItem("balance",balance);
      navigate("/checkbalance");
  }
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        
        <Link color="primary" onClick={handleNextButton}>
          View balance
        </Link>
        
      </div>
    </React.Fragment>
  );
}