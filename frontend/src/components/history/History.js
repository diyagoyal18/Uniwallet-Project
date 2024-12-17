import React from 'react'
import Title from '../Dashboard/Title';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }
  
  const rows = [
    createData(
      0,
      '16 Mar, 2019',
      '##34593%5',
      '340',
      '34',
      312.44,
    ),
    createData(
      1,
      '16 Mar, 2019',
      '#4892%4594#',
      '431',
      '43.1',
      866.99,
    ),
    createData(2, '16 Mar, 2019', '#459326&54', '958', '95.8', 100.81),
    createData(
      3,
      '16 Mar, 2019',
      '#3445%%%432',
      '2000',
      '200',
      654.39,
    ),
    createData(
      4,
      '15 Mar, 2019',
      '#4659%324',
      '10000',
      '1000',
      212.79,
    ),
  ];
  
  
const History = () => {
    const navigate = useNavigate();
    const [history,setHistory]= React.useState('');
  
    const handleNextButton = ()=>{
        localStorage.setItem("history",history);
        navigate("/history");
    }
  return (
    <React.Fragment>
    <Title>Recent Payments</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Meta ID</TableCell>
          <TableCell>Amount Paid</TableCell>
          <TableCell>Investment</TableCell>
          <TableCell align="right">Amount Debited</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.shipTo}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{`$${row.amount}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
    
  </React.Fragment>
  )
}

export default History
