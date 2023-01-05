import * as React from 'react';
import Chip from '@mui/material/Chip'
import './chips-delete.css'
import {ReactComponent as Plus} from '../../assets/Plus.svg'
import {ReactComponent as Trash} from '../../assets/Trash.svg'

function ChipsDelete() {
    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Outline'},
        {key: 1, label: 'Ingredient'},
        {key: 2, label: 'Certify'},
        {key: 3, label: 'Package'},
        {key: 4, label: 'Test'},
        {key: 5, label: 'Manufacture'},
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <div className='chips-delete'>
            <div className='chips-delete__box'>
                {chipData.map((data) => {
                    let icon;

                    return (
                        <div key={data.key}
                             className='chips-delete__list'
                        >
                            <Chip
                                deleteIcon={<Trash />}
                                label={data.label}
                                onDelete={data.label === '' ? undefined : handleDelete(data)}
                                className='chips-delete__item'
                            />
                        </div>
                    );
                })}

            </div>
            <div className='chips-delete__add'>
                <Plus className='chips-delete__plus'/>
            </div>
        </div>
    );
}

export default ChipsDelete;