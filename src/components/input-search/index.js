import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import {ReactComponent as Glass} from "../../assets/MagnifyingGlass.svg";
import {ReactComponent as Slider} from "../../assets/Sliders.svg";
import './style.css'
import SelectWindow from "../select-window";

const arraySelect = [
    {
        value: 1,
        label: 'dratute'
    },
    {
        value: 2,
        label: 'hello'
    }
]


function InputSearch(props) {

    return (
        <Paper className='input-search'>
            { props.detailed ?
                <div className='input-search__detailed'>
                    <Slider /> Detailed search
                </div>
                : null }
            { props.select ?
                <div className='input-search__select' placeholder={props.text}>
                    <SelectWindow value={2} array={arraySelect} />
                </div>
                : null }
            <InputBase
                className='input-search__base'
                placeholder="Search"
            />
            <div className='input-search__btn'>
                <Glass />
            </div>
        </Paper>
    );
}

export default InputSearch;