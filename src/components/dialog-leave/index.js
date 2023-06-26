import * as React from 'react';
import './dialog-leave.css';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as Smile} from "../../assets/SmileyMeh.svg";
import {ReactComponent as Check} from "../../assets/Check1.svg";
import GroupButton from "../group-button";


function DialogLeave(props) {

    const [fullWidth, setFullWidth] = React.useState(true);

    const [maxWidth, setMaxWidth] = React.useState('md');
    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            event.target.value,
        );
    };
    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickSecession = () => {
        setSecession(!secession)
    };

    const [secession, setSecession] = React.useState(false);

    return (
        <div className='dialog-leave'>
            <GroupButton colorFirst='pink' color='default' textTwo='Secession' close={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                className="dialog__window dialog-leave__window"
            >

                <div className='dialog-leave__dialog'>
                    <div className='dialog-leave__important'>
                        {secession ?

                            <>
                                <Check/>
                                <div className='dialog-leave__description'>Thank you for your use.<br/>
                                    You have just been secession.</div>
                            </>
                            :
                            <>
                                <Smile/>
                                <div className='dialog-leave__read'>Must read</div>
                                <div className='dialog-leave__description'>You cannot recovery upon secession.<br/>
                                    Are you sure you want to leave?</div>
                            </>
                        }
                    </div>

                    {secession ? <button onClick={props.secession} className='dialog-leave__btn'>Okay</button> :
                        <>
                            <GroupButton colorFirst='pink' color='default' textTwo='Secession' onClick={handleClose} close={handleClickSecession} />
                        </>
                    }
                </div>
            </Dialog>
        </div>
    );
}

export default DialogLeave;
