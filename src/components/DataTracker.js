import React from 'react';
import axios from 'axios';
import '../App.css'
import { CardContent, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
function DataTracker({apiData, setApiData, mpData, setmpData}) {

    const classes = useStyles();

    axios.get('https://api.covid19india.org/v4/min/data.min.json')
    .then(response => {
        console.log(response.data.MP.districts.Indore.delta7);
        setApiData(response.data.MP.districts.Indore.delta7);
        setmpData(response.data.MP.delta7);
    }).catch(error => {
        console.log(error);
    });


    return (
        <div>
            <Typography className="text-heading" variant='h5' color='textPrimary' m={2} align='center' gutterBottom>Covid cases in Indore</Typography>
            <Typography className="text-heading" variant='body' color='textPrimary' m={2} align='left' gutterBottom>State : Madhya Pradesh</Typography>
            <br /> <br />
            <div className='table-margin'>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Statistics</TableCell>
                        <TableCell align="center">Confirmed Cases</TableCell>
                        <TableCell align="center">Deaths</TableCell>
                        <TableCell align="center">Recovered</TableCell>
                        <TableCell align="center">Vaccinated</TableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Indore
              </TableCell>
              <TableCell align="center">{apiData.confirmed}</TableCell>
              <TableCell align="center">{apiData.deceased}</TableCell>
              <TableCell align="center">{apiData.recovered}</TableCell>
              <TableCell align="center">{apiData.vaccinated}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
    )
}

export default DataTracker
