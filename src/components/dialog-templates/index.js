import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import './style.css'
import {ReactComponent as Edit} from '../../assets/PencilSimpleLine.svg'
import InputSearch from "../input-search";
import Checkbox from "../checkbox";
import TemplatesBar from "../templates-bar";

function DialogTemplates() {

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');
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
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='dialog-templates'>
            <button className='dialog__btn' onClick={handleClickOpen}>
                <Edit/>
            </button>
            <Dialog open={open} onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth} className="dialog__window">
                <div className='dialog-templates__box'>
                    <div className='dialog-templates__left'>
                        <h2 className='dialog-upload-img__title'>Templates</h2>
                        <div className='dialog-upload-img__search'>
                            <InputSearch/>
                            <Checkbox/>
                        </div>
                        <div className='dialog-templates__container'>
                            <div className='dialog-templates__card'>
                                <h3 className='dialog-templates__typo'>Seasonal Promotion: Standard Course</h3>
                                <div className='dialog-templates__date'>
                                    <span>Last modified</span>
                                    Aug 3, 2022 at 11:27 AM
                                </div>
                            </div>

                            <div className='dialog-templates__card dialog-templates__card-active'>
                                <h3 className='dialog-templates__typo'>Super Fast Production</h3>
                                <div className='dialog-templates__date'>
                                    <span>Last modified</span>
                                    Aug 3, 2022 at 11:27 AM
                                </div>
                            </div>

                            <div className='dialog-templates__card'>
                                <h3 className='dialog-templates__typo'>Unbreakable process</h3>
                                <div className='dialog-templates__date'>
                                    <span>Last modified</span>
                                    Aug 3, 2022 at 11:27 AM
                                </div>
                            </div>

                            <div className='dialog-templates__card'>
                                <h3 className='dialog-templates__typo'>Never failed template</h3>
                                <div className='dialog-templates__date'>
                                    <span>Last modified</span>
                                    Aug 3, 2022 at 11:27 AM
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dialog-templates__right'>
                        <h2 className='dialog-upload-img__title'>Preview</h2>
                        <TemplatesBar />
                    </div>
                </div>
                <div className='dialog-upload-img__group-btn'>
                    <button className='dialog-upload-img__btn_cancel' onClick={handleClose}>Cancel</button>
                    <button className='dialog-upload-img__btn_confirm' onClick={handleClose} autoFocus>
                        Confirm
                    </button>
                </div>
            </Dialog>
        </div>
    )
        ;
}

export default DialogTemplates;