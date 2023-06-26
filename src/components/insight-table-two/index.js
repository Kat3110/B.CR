import * as React from 'react';
import './insight-table-two.css'
import InsightTitle from "../insight-title";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import Button from "../button";
import InsightTableMobile from "../insight-table-mobile";

function InsightTableTwo(props) {

    function createData(rank, title, pm, blocks, mentions, time) {
        return {rank, title, pm, blocks, mentions, time};
    }

    const rows = [
        createData(
            '1st',
            'Charis 2023 Summer Kids Package',
            {
                name: 'Aron H.',
                color: '#00A3FF',

            },
            20,
            20,
            '3 hours (average)'
        ),
        createData(
            '2nd',
            'Dr.G 2022, 2023 Christmas',
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',

            },
            20,
            20,
            '2 hours (average)'
        ),
        createData(
            '3rd',
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
            '4th',
            'Espoir 2024 Spring Project',
            {
                name: 'EDGAR',
                color: '#00A3FF',

            },
            20,
            20,
            '40 minutes (average)'
        ),
        createData(
            '5th',
            'Voynoon Concptual Production',
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            20,
            20,
            '45 minutes (average)'
        ),
    ];

    const rowsHead = [
        'Rank', 'Title', 'PM', 'Blocks', 'Mention', 'Response time'
    ]

    return (
        <>
            <div className='insight-table'>
                <InsightTitle title={props.title} image={props.image} />
                <Button text='See all' />
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {rowsHead.map((row, index) => (
                                    <TableCell align="left"
                                               key={index}
                                    >{row}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="td" scope="row" color='rg'>
                                        {row.rank}
                                    </TableCell>
                                    <TableCell align="left">{row.title}</TableCell>
                                    <TableCell align="left">
                                        <div className='insight-table__flex'>
                                            <CapitalLetter letter={row.pm.name[0]} bgColor={row.pm.color}/> {row.pm.name}
                                        </div>
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
            {rows.map((row, index) => (
                <InsightTableMobile
                    key={index}
                    title={row.title}
                    rank={row.rank}
                    blocks={row.blocks}
                    mentions={row.mentions}
                    time={row.time}
                    name={row.pm.name}
                >
                </InsightTableMobile>
            ))}
        </>
    );
}

export default InsightTableTwo;


