/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(CostTypes, CostAmount) {
  return {
    CostTypes, CostAmount
  };
}
const rows = [
  createData('Figma License Cost', '40,000'),
  createData('Loaner Devices', '200,000'),
  createData('Team Events', '200,000')
];
function SuppementaryCostTableModal({costTable , setCostTable}) {

  const handleClick = () => {
    setCostTable(!costTable)
  }

  return costTable?(
    <div onClick={handleClick} className="flex flex-col w-screen h-screen justify-center items-center bg-white" id="supplementary-cost-table">
    <div className=" flex-col justify-items-start  border-2 border-slate-500 p-3 bg-white justify-center cursor-not-allowed " >
    <div className='w-full h-10 flex flex-row justify-end'><button onClick={handleClick}>X</button></div>
        <div className=" text-2xl text-blue-700 my-4">Supplementary Cost Split</div>
        <div className="bg-sky-100 px-8 py-5">
    <TableContainer component={Paper}>
      <Table sx={{ Width: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cost Types</StyledTableCell>
            <StyledTableCell align="right">Cost Amount in ₹</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.CostTypes}
              </StyledTableCell>
              <StyledTableCell align="right">{row.CostAmount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  ):null;
}

export default SuppementaryCostTableModal;
