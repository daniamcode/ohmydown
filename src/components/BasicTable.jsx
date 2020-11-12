import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 400
  },
});

function createData(website, uptime, delay) {
  return { website, uptime, delay };
}

const rows = [
  createData('sport.es', 97.32, 235),
  createData('yavendras.com', 96.21, 432),
  createData('google.com', 95.41, 211),
  createData('upc.cat', 94.83, 421),
  createData('fcb.cat', 89.21, 87),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Website</TableCell>
            <TableCell align="right">Uptime (%)</TableCell>
            <TableCell align="right">Delay (Average ms)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.website}>
              <TableCell component="th" scope="row">
                {row.website}
              </TableCell>
              <TableCell align="right">{row.uptime}</TableCell>
              <TableCell align="right">{row.delay}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
