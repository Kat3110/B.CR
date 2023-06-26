import * as React from 'react';
import './dialog-password.css'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {ReactComponent as Eye} from '../../assets/Eye.svg';
import {ReactComponent as EyeClosed} from '../../assets/EyeClosed.svg';
import {ReactComponent as ShareNetwork} from '../../assets/ShareNetwork.svg';
import {ReactComponent as Trash} from '../../assets/Trash.svg';
import GroupButton from "../group-button";


function DialogPassword() {

    const [showPassword, setShowPassword] = React.useState(false);

    const [showUrl, setShowUrl] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='dialog-password'>
                <div className='dialog-password__box'>
                <button className='dialog-password__button'><ShareNetwork /></button>
                    { showUrl ?
                        <>
                            <h2 className='dialog-password__title'>Block URL<Trash /></h2>
                            <input
                                className='dialog-password__input'
                                type="text"
                                disabled
                                defaultValue={'https://block.bcradle.com/[random_id]'}/>
                            <Trash  className='dialog-password__trash' />
                            <div className='dialog-password__btn'>
                                <GroupButton textTwo='Copy URL' onClick={() => setShowUrl(!showUrl)}/>
                            </div>

                        </>
                        :
                        <>
                            <h2 className='dialog-password__title'>Password</h2>
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
                                <span className='dialog-password__help'>Enter 4-digit number.</span>
                            </FormControl>

                            <GroupButton textTwo='Share' onClick={() => setShowUrl(!showUrl)}/>
                        </>
                    }

                </div>
            </div>
        </>
    );
}

export default DialogPassword;

