import * as React from 'react';
import './insight-table-three.css'
import InsightTitle from "../insight-title";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import Button from "../button";

function InsightTableThree(props) {

    function createData(rank, title, pm, text, emoji, image, link, video, file, total) {
        return {rank, title, pm, text, emoji, image, link, video, file, total};
    }

    const rows = [
        createData(
            1,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Aron H.',
                color: '#00A3FF',

            },
            50,
            50,
            50,
            50,
            50,
            50,
            '2,150',
        ),
        createData(
            2,
            'Dr.G 2022, 2023 Christmas',
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',

            },
            50,
            50,
            50,
            50,
            50,
            50,
            '1,028',
        ),
        createData(
            3,
            'Moonshot Secret Project',
            {
                name: 'Angelica',
                color: '#00A3FF',

            },
            50,
            50,
            50,
            50,
            50,
            50,
            '920',
        ),
        createData(
            4,
            'Espoir 2024 Spring Project',
            {
                name: 'EDGAR',
                color: '#00A3FF',

            },
            50,
            50,
            50,
            50,
            50,
            50,
            '587',
        ),
        createData(
            5,
            'Voynoon Concptual Production',
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            50,
            50,
            50,
            50,
            50,
            50,
            '300',
        ),
    ];

    const rowsHead = [
        'Rank', 'Title', 'PM', 'Text', 'Emoji', 'Image', 'Link', 'Video', 'File', 'Total'
    ]

    return (
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
                            // rank, title, text, emoji, image, link, video, file, file
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="td" scope="row" color='rg'>
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
                                <TableCell align="left">{row.text}</TableCell>
                                <TableCell align="left">{row.emoji}</TableCell>
                                <TableCell align="left">{row.image}</TableCell>
                                <TableCell align="left">{row.link}</TableCell>
                                <TableCell align="left">{row.video}</TableCell>
                                <TableCell align="left">{row.file}</TableCell>
                                <TableCell className='insight-table__col-pink' align="left">{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default InsightTableThree;


