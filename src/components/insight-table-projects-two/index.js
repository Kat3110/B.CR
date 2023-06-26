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
import InsightTableMobileThree from "../insight-table-mobile-three";
import InsightTableProjectsMobile from "../insight-table-projects-mobile";

function InsightTableProjectsTwo() {

    function createData(no, project, pm, emoji, image, link, video, file, data, access, time, email,authority,joined,blocks,mentions) {
        return {no, project, pm, emoji, image, link, video, file, data, access, time,email,authority,joined,blocks,mentions};
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
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
            50,
            '10 min. ago',
            '10 min. (average)',
            'aron@internet.com',
            'Manager',
            '20',
            '20',
            '20'
        ),
    ];

    const rowsHead = [
        'No.', 'Project', 'PM','Emoji','Image','Link', 'Video', 'File', 'Data'
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
            </div>

            {rows.map((row, index) => (
                <InsightTableProjectsMobile
                    key={index}
                    rank={row.rank}
                    title={row.title}
                    email={row.email}
                    name={row.pm.name}
                    authority={row.authority}
                    access={row.access}
                    joined={row.joined}
                    blocks={row.blocks}
                    mentions={row.mentions}
                    time={row.time}
                    color={row.pm.color}
                >
                </InsightTableProjectsMobile>
            ))}
            <Pagination />
        </>

    );
}

export default InsightTableProjectsTwo;


