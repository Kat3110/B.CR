import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import './style.css'
import {ReactComponent as Edit} from '../../assets/PencilSimpleLine.svg'
import InputSearch from "../input-search";
import Checkbox from "../checkbox";
import TemplatesBar from "../templates-bar";
import BoxTemplate from "../box-template";
import GroupButton from "../group-button";
import {ReactComponent as IconMusic} from "../../assets/MusicNotesSimple.svg";


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
            <Dialog open={open} onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth}
                    className="dialog__window dialog-templates__window">
                <div className='dialog-templates__box'>
                    <div className='dialog-templates__left'>
                        <h2 className='dialog-templates__title'>Templates</h2>
                        <div className='dialog-templates__search'>
                            <InputSearch/>
                            <Checkbox text='Show Only My Templates' color="rgba(0,0,0,0.25)" />
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
                        <h2 className='dialog-templates__title'>Preview</h2>
                        <TemplatesBar />
                        <div className='dialog-templates__block'>
                            <BoxTemplate children={
                                <article>
                                    <Checkbox text="Toner concept and prescription suggestions"/>
                                    <Checkbox text="Review of toner concept and sales strategy"/>
                                    <Checkbox text="Raw material inspection"/>
                                    <Checkbox text="Raw material inspection"/>
                                </article>
                                }
                            />

                            <BoxTemplate children={
                                <article>
                                    <p>
                                        Quotation contents<br />
                                        is here
                                    </p>
                                </article>
                                }
                            />

                            <BoxTemplate children={
                                <article>
                                    <div className='table'>
                                        <div>Chart title</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                        <div>Contents</div>
                                    </div>
                                </article>
                                }
                            />

                            <BoxTemplate children={
                                <article>
                                    <div className='audio'>
                                        <div className='audio__icon'>
                                            <IconMusic/>
                                        </div>
                                        Audio.mp3
                                    </div>
                                </article>
                            }
                            />

                            <BoxTemplate children={
                                <article>
                                    <p>
                                        Quotation contents<br />
                                        is here
                                    </p>
                                </article>
                            }
                            />
                        </div>
                    </div>
                </div>
                <div style={{padding:'0 60px 50px'}}>
                    <GroupButton close={handleClose} justify="flex-end"/>
                </div>

            </Dialog>
        </div>
    )
        ;
}

export default DialogTemplates;