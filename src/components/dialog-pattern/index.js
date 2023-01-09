import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './dialog-pattern.css';
import {ReactComponent as Close} from "../../assets/Plus.svg";

function DialogPattern(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div onClick={handleClickOpen}>{props.trigger}</div>
            <Dialog
                className='dialog-pattern__window'
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className='dialog-pattern__box'>
                    <div className='dialog-pattern__headline'>
                        <h2 className='dialog-pattern__title'>
                            {props.icon}
                            {props.title}
                        </h2>
                        <Close className='dialog-pattern__close' onClick={handleClose} />
                    </div>
                    <div className='dialog-pattern__content'>
                        {props.content}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DialogPattern;