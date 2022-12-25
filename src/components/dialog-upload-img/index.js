import * as React from 'react';
import './style.css'
import {ReactComponent as Edit} from '../../assets/PencilSimpleLine.svg'
import  {ReactComponent as EmptyPicture}  from '../../assets/emptyPicture.svg'
import  {ReactComponent as Pluse}  from '../../assets/Plus.svg'
import Dialog from '@mui/material/Dialog';


function DialogUploadImg() {

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
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

    return (
        <div className='dialog-upload-img'>
            <button className='dialog__btn' onClick={handleClickOpen}>
                <Edit/>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                className="dialog__window"
            >
                <div className='dialog-upload-img__box'>
                    <h2 className='dialog-upload-img__title'>Set your profile.</h2>
                    <div className='dialog-upload-img__list'>
                        <span>Allowed</span>
                        <span className='dialog-upload-img__item'>within 5MB</span>
                        <span className='dialog-upload-img__item dialog-upload-img__item_before'>JPG</span>
                        <span className='dialog-upload-img__item dialog-upload-img__item_before'>PNG</span>
                    </div>
                    <div className='dialog-upload-img__picture'>
                        <EmptyPicture />
                        <div className='dialog-upload-img__add' >
                            <Pluse/>
                        </div>
                    </div>
                    <div className='dialog-upload-img__colors' >
                        <div className='dialog-upload-img__first' ></div>
                        <div className='dialog-upload-img__second' ></div>
                        <div className='dialog-upload-img__three' ></div>
                        <div className='dialog-upload-img__four' ></div>
                        <div className='dialog-upload-img__five' ></div>
                        <div className='dialog-upload-img__six' ></div>
                        <div className='dialog-upload-img__seven' ></div>
                        <div className='dialog-upload-img__eight' ></div>
                    </div>
                    <div className='dialog-upload-img__group-btn' >
                        <button className='dialog-upload-img__btn_cancel'  onClick={handleClose}>Cancel</button>
                        <button className='dialog-upload-img__btn_confirm'  onClick={handleClose} autoFocus>
                            Confirm
                        </button>
                    </div>
                </div>
        </Dialog>
</div>
)
    ;
}

export default DialogUploadImg;