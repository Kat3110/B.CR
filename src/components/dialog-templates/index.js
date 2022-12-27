import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import './style.css'
import {ReactComponent as Edit} from '../../assets/PencilSimpleLine.svg'
import InputSearch from "../input-search";
import Checkbox from "../checkbox";
import BoxTemplate from "../box-template";
import GroupButton from "../group-button";
import CheckboxTemplate from "../checkbox-template";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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
    const [value, setValue] = React.useState('2');
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
                            <CheckboxTemplate
                                title='Seasonal Promotion: Standard Course'
                                time='Aug 3, 2022 at 11:27 AM'
                            />
                            <CheckboxTemplate
                                check='true'
                                title='Super Fast Production'
                                time='Aug 3, 2022 at 11:27 AM'
                            />
                            <CheckboxTemplate
                                title='Unbreakable process'
                                time='Aug 3, 2022 at 11:27 AM'
                            />
                            <CheckboxTemplate
                                title='Never failed template'
                                time='Aug 3, 2022 at 11:27 AM'
                            />
                        </div>
                    </div>

                    <div className='dialog-templates__right'>
                        <h2 className='dialog-templates__title'>Preview</h2>
                        <div className='tabs'>
                            <TabContext value={value}>
                                <TabList className='tabs__list' onChange={handleChange}>
                                    <Tab className='tabs__tab' value="1" disableRipple
                                         label={<div>Outline</div>}/>
                                    <Tab className='tabs__tab' value="2" disableRipple
                                         label={<div>Ingredient</div>}/>
                                    <Tab className='tabs__tab' value="3" disableRipple
                                         label={<div>Certify</div>}/>
                                    <Tab className='tabs__tab' value="4" disableRipple
                                         label={<div>Package</div>}/>
                                    <Tab className='tabs__tab' value="5" disableRipple
                                         label={<div>Test</div>}/>
                                    <Tab className='tabs__tab' value="6" disableRipple
                                         label={<div>Manufacture</div>}/>
                                </TabList>
                                <div className='dialog-templates__block'>
                                    <TabPanel value="1" sx={{p: 0}}>
                                        Outline Content
                                    </TabPanel>
                                    <TabPanel value="2" sx={{p: 0}}>
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
                                    </TabPanel>
                                    <TabPanel value="3" sx={{p: 0}}>
                                        Certify Content
                                    </TabPanel>
                                    <TabPanel value="4" sx={{p: 0}}>
                                        Package Content
                                    </TabPanel>
                                    <TabPanel value="5" sx={{p: 0}}>
                                        Test Content
                                    </TabPanel>
                                    <TabPanel value="6" sx={{p: 0}}>
                                        Manufacture Content
                                    </TabPanel>
                                </div>
                            </TabContext>
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