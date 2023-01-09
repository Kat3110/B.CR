import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ReactComponent as Save } from "../../assets/Download.svg";
import './dialog-save.css'
import TextField from "@mui/material/TextField";
import Button from "../button";
import GroupButton from "../group-button";

function DialogSave() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='dialog-save'>
            <Button onClick={handleClickOpen} text='Save' color='pink' size='s'/>
            <Dialog
                className='dialog-save__window'
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className='dialog-save__box'>
                    <h2 className='dialog-save__title'>
                        <Save />
                        Save as Template
                    </h2>
                    <div className='dialog-save__headline'>
                        <p className='dialog-save__subtitle'>
                            Title
                        </p>
                        <TextField id="outlined-basic"
                                   variant="outlined"
                                   placeholder='[CHIYOU] Concept/Container/Package/Order' />
                    </div>

                    <div className='dialog-save__headline'>
                        <p className='dialog-save__subtitle'>
                            Stage
                        </p>
                       <div className='dialog-save__buttons'>
                          <Button text='Concept' color='pink' size='m'/>
                          <Button text='Prescription' color='default' size='m'/>
                          <Button text='Container' color='pink' size='m'/>
                          <Button text='Package' color='pink' size='m'/>
                          <Button text='Test' color='default' size='m'/>
                          <Button text='Check' color='default' size='m'/>
                          <Button text='Double Check' color='default' size='m'/>
                          <Button text='Order' color='pink' size='m'/>
                       </div>
                    </div>

                </DialogContent>
                <GroupButton close={handleClose}/>
            </Dialog>
        </div>
    );
}

export default DialogSave;