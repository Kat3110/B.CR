import * as React from 'react';
import Chip from '@mui/material/Chip'
import './style.css'
import {ReactComponent as Plus} from '../../assets/Plus.svg'
import {ReactComponent as Trash} from '../../assets/Trash.svg'
import Checkbox from "../checkbox";
import HTMLTooltip from "../custom-tooltip";

function CheckboxesDelete(props) {
    const [chipData, setChipData] = React.useState(props.data);

    const handleDelete = (chipToDelete) => () => {
        console.log(chipToDelete)
        setChipData((chips) => chips.filter((chip) => chip.value !== chipToDelete.value));
    };

    return (
        <div className='checkboxes-delete'>
            <div className='checkboxes-delete__box'>
                {chipData.map((data) => {
                    let icon;

                    return (
                        <div key={data.value}
                             className='checkboxes-delete__list'
                        >
                            <Chip
                                deleteIcon={<Trash />}
                                label={
                                    <HTMLTooltip
                                        content={<Checkbox
                                            text={data.label}
                                            checked={data.checked}
                                            disabled='disabled'
                                        />}
                                        hover='Complete stage'
                                    />
                                }
                                onDelete={data.label === '' ? undefined : handleDelete(data)}
                                className='checkboxes-delete__item'
                            />
                        </div>
                    );
                })}

            </div>
            <div className='checkboxes-delete__add'>
                <Plus className='checkboxes-delete__plus'/>
            </div>
        </div>
    );
}

export default CheckboxesDelete;