import * as React from 'react';
import './page-password.css'
import DialogPassword from "../../components/dialog-password";
import Header from "../../layout/header";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {ReactComponent as EyeClosed} from "../../assets/EyeClosed.svg";
import {ReactComponent as Eye} from "../../assets/Eye.svg";
import BoxTemplate from "../../components/box-template";
import Checkbox from "../../components/checkbox";


function PagePassword() {

    const [dialogPw, setDialogPw] = React.useState(false);

    const [pagePw, setPagePw] = React.useState(false);

    const [sharePw, setSharePw] = React.useState(true);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const arrayCheckboxes = [
        {
            text: 'Toner concept and prescription suggestions'
        },
        {
            text: 'Review of toner concept and sales strategy'
        },
        {
            text: 'Weekly customer meeting'
        },
        {
            text: 'Customer meeting and subsidiary material review'
        },
        {
            text: 'Supply and demand of additional supporting data (data based on functional labeling, separate emission labeling, etc.)'
        },
        {
            text: 'Raw material inspection'
        },
        {
            text: 'Raw material inspection'
        },

    ]

    return (
        <>
            <Header onlyImg/>
            {dialogPw ?
                <DialogPassword/>
                :
                null
            }
            {pagePw
                ?
                <div className='page-password'>
                    <div className='page-password__box'>
                        <h2 className='page-password__title'>Password</h2>
                        <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <EyeClosed/> : <Eye/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <span className='page-password__help'>Enter 4-digit number.</span>
                        </FormControl>
                    </div>
                </div>
               :
               null
            }
            {sharePw ?
                <div className='page-password page-password__template'>
                        <BoxTemplate
                            children={
                                <article>
                                    {arrayCheckboxes.map((checkbox, index) => (
                                        <Checkbox
                                            text={checkbox.text}
                                            key={index}
                                        />))
                                    }
                                </article>
                            }
                            name='Hubert Benjamin'
                            date='1 days ago'
                            bgColor='#00E99E'
                        />
                </div>
                :
                null
            }
        </>
    );
}

export default PagePassword;
