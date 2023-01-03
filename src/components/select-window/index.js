import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import './style.css'

const MenuProps = {
    PaperProps: {
        style: {
            padding: '0px 8px',
            width: 138,
            background: '#FFFFFF',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.12)',
            borderRadius: '5px'
        },
    },
};


function SelectWindow(props) {
    const [value, setValue] = React.useState(props.value);

    const array = props.array

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        // <Select
        //     className='select-window'
        //     defaultValue="dog"
        //     color="neutral"
        //     variant="plain"
        //     indicator={<KeyboardArrowDown sx={{fill: 'rgba(0, 0, 0, 0.2)'}} />}
        //     sx={{
        //         width: 240,
        //         [`& .${selectClasses.indicator}`]: {
        //             transition: '0.2s',
        //             [`&.${selectClasses.expanded}`]: {
        //                 transform: 'rotate(-180deg)',
        //             },
        //         },
        //     }}
        //     slotProps={{
        //         listbox: {
        //             component: 'div',
        //             sx: {
        //                 maxHeight: 123,
        //                 overflow: 'auto', // required for scrolling
        //                 border: 'none',
        //                 background: 'white',
        //                 boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.12)',
        //                 fontWeight: 400,
        //                 fontSize: '15px',
        //                 lineHeight: '25px'
        //             }
        //         }
        //     }}
        // >
        //     <Option value="dog">Dog</Option>
        //     <Option value="cat">Cat</Option>
        //     <Option value="fish">Fish</Option>
        //     <Option value="bird">Bird</Option>
        // </Select>
            // <Select
            //     className='select-window'
            //     color="neutral"
            //     disabled={false}
            //     placeholder="PM"
            //     size="md"
            //     variant="plain"
            //     defaultValue="dog"
            // >
            //     <Option value="dog">Dog</Option>
            //     <Option value="cat">Cat</Option>
            // </Select>

        <Select
            className='select-window'
            value={value}
            onChange={handleChange}
            MenuProps={MenuProps}
        >
                {array.map((option) => (
                    <MenuItem
                        className='select-window__option'
                        value={option.value}
                        key={option.value+option.label}
                    >{option.label}</MenuItem>))}
        </Select>
    );
}
export default SelectWindow;