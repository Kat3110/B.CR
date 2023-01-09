import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './select-window.css'

function SelectWindow(props) {
    const MenuProps = {
        PaperProps: {
            style: {
                padding: '0px 8px',
                width: props.width ? props.width : 138,
                background: '#FFFFFF',
                boxShadow: '0px 25px 30px rgba(0, 0, 0, 0.12)',
                borderRadius: '0 0 5px 5px',
                marginTop: '-1px'
            },
        },
    }

    const [value, setValue] = React.useState(props.value);

    const array = props.array

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='select-window'>
            <Select
                value={value}
                className='select-window__select'
                onChange={handleChange}
                MenuProps={MenuProps}
                style={{
                    backgroundColor: props.color ? props.color : 'rgba(0, 0, 0, 0.04)',
                    minWidth: props.width ? `${props.width}px` : '138px',
                }}
            >
                {array.map((option) => (
                    <MenuItem
                        className='select-window__option'
                        value={option.value}
                        key={option.value+option.label}
                    >{option.label}</MenuItem>
                ))}
            </Select>
        </div>
    );
}
export default SelectWindow;