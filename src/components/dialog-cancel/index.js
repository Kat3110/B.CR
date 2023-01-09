import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './dialog-cancel.css'
import Button from "../button";
import GroupButton from "../group-button";

function DialogCancel(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='dialog-cancel'>
            <Button onClick={handleClickOpen} text='Cancel' color='default' size='s'/>
            <Dialog
                className='dialog-cancel__window'
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent  className='dialog-cancel__box'>
                    <h2 className='dialog-cancel__title'>
                        Are you sure?
                    </h2>
                    <p className='dialog-cancel__subtitle'>
                        Are you sure without saving?
                    </p>
                </DialogContent>
                <GroupButton close={handleClose} onClick={props.onClick}/>
            </Dialog>
        </div>
    );
}

export default DialogCancel;