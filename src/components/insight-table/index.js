import * as React from 'react';
import './style.css'
import InsightTitle from "../insight-title";
import ArrowUpLeft from "../../assets/ArrowUUpLeft.svg";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import Button from "../button";


function createData(rank, title, pm, blocks, mentions, time) {
    return {rank, title, pm, blocks, mentions, time};
}

const rows = [
    createData(
        1,
        'Charis 2023 Summer Kids Package',
        {
            name: 'Aron H.',
            color: '#00A3FF',

        },
        20,
        20,
        '10 minutes (average)'
    ),
    createData(
        2,
        'Dr.G 2022, 2023 Christmas',
        {
            name: 'Yves Saint Laurent',
            color: '#8F00FF',

        },
        20,
        20,
        '20 minutes (average)'
    ),
    createData(
        3,
        'Moonshot Secret Project',
        {
            name: 'Angelica',
            color: '#00A3FF',

        },
        20,
        20,
        '35 minutes (average)'
    ),
    createData(
        4,
        'Espoir 2024 Spring Project',
        {
            name: 'EDGAR',
            color: '#00A3FF',

        },
        20,
        20,
        '2 hours (average)'
    ),
    createData(
        5,
        'Voynoon Concptual Production',
        {
            name: 'Hubert Benjamin',
            color: '#00E99E',

        },
        20,
        20,
        '3 hours (average)'
    ),
];

function InsightTable() {

    return (
        <div className='insight-table'>
            <InsightTitle title='Fastest response time' image={ArrowUpLeft}/>
            <Button text='See all' />
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">PM</TableCell>
                            <TableCell align="left">Blocks</TableCell>
                            <TableCell align="left">Mentions</TableCell>
                            <TableCell align="left">Response time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" color='rg'>
                                    {row.rank}
                                </TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left"
                                           sx={{
                                               display: 'flex',
                                               alignItems: 'center',
                                               gap: '0 5px'
                                }}>
                                    <CapitalLetter letter={row.pm.name[0]} bgColor={row.pm.color}/> {row.pm.name}
                                </TableCell>
                                <TableCell align="left">{row.blocks}</TableCell>
                                <TableCell align="left">{row.mentions}</TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default InsightTable;

