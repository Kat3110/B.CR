import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import {ReactComponent as Glass} from "../../assets/MagnifyingGlass.svg";
import style from './style.css'

function InputSearch() {
    return (
        <Paper className='input-search'>
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