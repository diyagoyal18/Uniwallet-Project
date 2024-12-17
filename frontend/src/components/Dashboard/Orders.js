import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
// Generate Order Data
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



export default function Orders() {
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
      
      <Link onClick={handleNextButton} color="primary" href="#"  sx={{ mt: 3 }}>
        See more Payments
      </Link>
    </React.Fragment>
  );
}
