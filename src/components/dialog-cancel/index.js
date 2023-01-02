import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import style from './style.css'

function DialogCancel() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='dialog-cancel'>
            <button onClick={handleClickOpen}
                    className='page-template__btn-cancel'>Cancel
            </button>
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
                <div className='dialog-cancel__button-group'>
                    <button className='dialog-cancel__button dialog-cancel__button_cancel' onClick={handleClose}>Cancel</button>
                    <button className='dialog-cancel__button dialog-cancel__button_confirm'  onClick={handleClose} autoFocus>
                        Confirm
                    </button>
                </div>
            </Dialog>
        </div>
    );
}

export default DialogCancel;