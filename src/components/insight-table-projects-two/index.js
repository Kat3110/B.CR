import * as React from 'react';
import './insight-table-projects-two.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import {ReactComponent as ArrowSquareInPink} from "../../assets/ArrowSquareInPink.svg";
import Pagination from '../../components/pagination'

function InsightTableProjectsTwo() {

    function createData(no, project, pm, emoji, image, link, video, file, data) {
        return {no, project, pm, emoji, image, link, video, file, data};
    }

    const rows = [
        createData(
            1,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            50,
            50,
            50,
            50,
            50,
            50
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
            50,
            50,
            50,
            50
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
            50,
            50,
            50,
            50
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
            50,
            50,
            50,
            50
        ),
        createData(
            5,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Benjamin Hubert',
                color: '#FFD702',

            },
            50,
            50,
            50,
            50,
            50,
            50
        ),
        createData(
            1,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            50,
            50,
            50,
            50,
            50,
            50
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
            50,
            50,
            50,
            50
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
            50,
            50,
            50,
            50
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
            50,
            50,
            50,
            50
        ),
        createData(
            5,
            'Charis 2023 Summer Kids Package',
            {
                name: 'Paves',
                color: '#FFD702',

            },
            50,
            50,
            50,
            50,
            50,
            50
        ),
    ];

    const rowsHead = [
        'No.', 'Project', 'PM','Emoji','Image','Link', 'Video', 'File', 'Data'
    ]

    return (
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
                                <TableCell align="left"
                                   sx={{
                                       display: 'flex',
                                       alignItems: 'center',
                                       gap: '0 5px'
                                }}>
                                    <CapitalLetter letter={row.pm.name[0]} bgColor={row.pm.color}/> {row.pm.name}
                                </TableCell>
                                <TableCell align="left">{row.emoji}</TableCell>
                                <TableCell align="left">{row.image}</TableCell>
                                <TableCell align="left">{row.link}</TableCell>
                                <TableCell align="left">{row.video}</TableCell>
                                <TableCell align="left">{row.file}</TableCell>
                                <TableCell align="left">{row.data}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination />
        </div>
    );
}

export default InsightTableProjectsTwo;


