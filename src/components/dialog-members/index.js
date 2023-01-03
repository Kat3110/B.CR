import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ReactComponent as Save } from "../../assets/Download.svg";
import './style.css';
import GroupButton from "../group-button";
import {ReactComponent as Setting} from "../../assets/setting.svg";
import {ReactComponent as Close} from "../../assets/Plus.svg";
import ButtonChange from "../button-change";
import InputSearch from "../input-search";
import Button from "../../components/button";
import SelectWindow from "../select-window";

function DialogMembers() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='dialog-members'>
            <ButtonChange icon={<Setting />} onClick={handleClickOpen} />
            <Dialog
                className='dialog-members__window'
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className='dialog-members__box'>
                    <div className='dialog-members__headline'>
                        <h2 className='dialog-members__title'>
                            <Setting/>
                            Members
                        </h2>
                        <Close className='dialog-members__close' />
                    </div>
                    <div className='dialog-members__search'>
                        <InputSearch text='Email adress' select/>
                        <Button text='Send'/>
                    </div>
                </DialogContent>
                <GroupButton close={handleClose}/>
            </Dialog>
        </div>
    );
}

export default DialogMembers;