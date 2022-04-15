import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import info from './info'

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

function createData(name, nm, sg, mg) {
  return { name, nm, sg, mg };
}


const rows = [
  createData(info.descr[0], info.nm[0], info.sg[0], info.mg[0]),
  createData(info.descr[1], info.nm[1], info.sg[1], info.mg[1]),
  createData(info.descr[2], info.nm[2], info.sg[2], info.mg[2]),
  createData(info.descr[3], info.nm[3], info.sg[3], info.mg[3]),
  createData(info.descr[4], info.nm[4], info.sg[4], info.mg[4]),
  createData(info.descr[5], info.nm[5], info.sg[5], info.mg[5]),
  createData(info.descr[6], info.nm[6], info.sg[6], info.mg[6]),
  createData(info.descr[7], info.nm[7], info.sg[7], info.mg[7]),
  createData(info.descr[8], info.nm[8], info.sg[8], info.mg[8]),
  createData(info.descr[9], info.nm[9], info.sg[9], info.mg[9]),
  createData(info.descr[10], info.nm[10], info.sg[10], info.mg[10]),
  createData(info.descr[11], info.nm[11], info.sg[11], info.mg[11]),
];


const BasicTable = () => {
  const classes = useStyles();

  return (
    // <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table" style={{ width: "100%" }}>
      <TableHead>
        <TableRow>

          <TableCell align="left">task</TableCell>
          <TableCell align="left">NodeMailer</TableCell>
          <TableCell align="left">SendGrid</TableCell>
          <TableCell align="left">MailGun</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.nm}</TableCell>
            <TableCell align="left">{row.sg}</TableCell>
            <TableCell align="left">{row.mg}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
    // </TableContainer>
  );
}

export default BasicTable
