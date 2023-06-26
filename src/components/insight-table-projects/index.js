import * as React from 'react';
import './insight-table-projects.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import {ReactComponent as ArrowSquareInPink} from "../../assets/ArrowSquareInPink.svg";
import Pagination from '../../components/pagination'
import InsightTableMobile from "../insight-table-mobile";

function InsightTableProjects() {

    function createData(no, project, pm, blocks, mentions, time) {
        return {no, project, pm, blocks, mentions, time};
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
            '10 minutes (average)'
        ),
        createData(
            2,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',

            },
            50,
            50,
            '50 minutes (average)'
        ),
        createData(
            3,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Angelica',
                color: '#00A3FF',

            },
            50,
            50,
            '35 minutes (average)'
        ),
        createData(
            4,
            'Charis 2023 Summer Kids Package',
            {
                name: 'EDGAR',
                color: '#00A3FF',

            },
            50,
            50,
            '2 hours (average)'
        ),
        createData(
            5,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            50,
            50,
            '3 hours (average)'
        ),
        createData(
            1,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Aron H.',
                color: '#00A3FF',

            },
            50,
            50,
            '10 minutes (average)'
        ),
        createData(
            2,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',

            },
            50,
            50,
            '50 minutes (average)'
        ),
        createData(
            3,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Angelica',
                color: '#00A3FF',

            },
            50,
            50,
            '35 minutes (average)'
        ),
        createData(
            4,
            'Charis 2023 Summer Kids Package',
            {
                name: 'EDGAR',
                color: '#00A3FF',

            },
            50,
            50,
            '2 hours (average)'
        ),
        createData(
            5,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            50,
            50,
            '3 hours (average)'
        ),
    ];

    const rowsHead = [
        'No.', 'Project', 'PM', 'Blocks', 'Mention', 'Response time'
    ]

    return (
        <>
            <div className='insight-table'>
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
                                        {row.no}
                                    </TableCell>
                                    <TableCell>
                                        <ArrowSquareInPink style={{margin: '0px 4px -3px 0px'}} />
                                        {row.project}
                                    </TableCell>
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
                    // rank={row.rank}
                    title={row.project}
                    blocks={row.blocks}
                    mentions={row.mentions}
                    time={row.time}
                    name={row.pm.name}
                >
                </InsightTableMobile>
            ))}
            <Pagination />
        </>

    );
}

export default InsightTableProjects;


