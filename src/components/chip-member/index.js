import * as React from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import {ReactComponent as DeleteIcon} from "../../assets/DeleteIcon.svg";
import './chip-member.css'

export default function ChipMember(props) {
    const [chipData, setChipData] = React.useState(props.array);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleClick = () => {
        console.info('clicked chip.');
    };

    return (
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0,
                m: 0,
                gap: '10px'
            }}
            component="ul"
        >
            {chipData.map((data) => {
                return (
                    <Chip
                        key={data.key}
                        className='chip-member'
                        deleteIcon={<DeleteIcon />}
                        label={data.firstWord ?
                            <>
                                <span className='chip-member__first-word'>
                                    {data.firstWord}
                                </span> {data.label}
                            </>
                            : data.label}
                        onClick={handleClick}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                    />
                );
            })}
        </Paper>
    );
}