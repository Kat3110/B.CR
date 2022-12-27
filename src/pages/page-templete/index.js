import * as React from 'react';
import {useState} from "react";
import './style.css'
import BackgroundImg from "../../components/background-img";
import bgImage2 from "../../assets/maskBG2.jpg";
import InputSearch from "../../components/input-search";
import Checkbox from "../../components/checkbox";
import CheckboxTemplate from "../../components/checkbox-template";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import BoxTemplate from "../../components/box-template";
import {ReactComponent as IconMusic} from "../../assets/MusicNotesSimple.svg";
import ButtonChange from "../../components/button-change";
import DeleteIcon from "../../assets/Trash.svg";
import DoneIcon from '../../assets/PencilSimpleLine.svg';
import {ReactComponent as Check} from '../../assets/Check.svg';


function PageTemplate() {

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
    const [item, setItem] = React.useState('2');
    const handleChangeItem = (event, newValue) => {
        setItem(newValue);
    };
    const [status, setStatus] = useState(true)

    return (
        <div className='page-template'>
            <BackgroundImg background={bgImage2}/>
            <div className='page-template__box container'>
                <div className='page-template__left'>
                    <div className='page-template__items'>
                        <div className='tabs'>
                            <TabContext value={value}>
                                <TabList className='tabs__list' onChange={handleChange}>
                                    <Tab className='tabs__tab' value="1" disableRipple
                                         label={<div>Projects</div>}/>
                                    <Tab className='tabs__tab' value="2" disableRipple
                                         label={<div>Templates</div>}/>
                                </TabList>
                                <InputSearch/>
                            </TabContext>
                        </div>
                    </div>
                    <div className='page-template__checkboxes'>
                        <Checkbox text='Show Only My Templates' color="rgba(0,0,0,0.5)"/>
                        <CheckboxTemplate
                            title='Seasonal Promotion: Standard Course'
                            time='Aug 3, 2022 at 11:27 AM'
                        />
                        <CheckboxTemplate
                            title='Unbreakable process'
                            time='Aug 3, 2022 at 11:27 AM'
                        />
                        <CheckboxTemplate
                            check='true'
                            title='Super Fast Production'
                            time='Aug 3, 2022 at 11:27 AM'
                        />
                        <CheckboxTemplate
                            title='Never failed template'
                            time='Aug 3, 2022 at 11:27 AM'
                        />
                        <CheckboxTemplate
                            title='Communication like magic'
                            time='Aug 3, 2022 at 11:27 AM'
                        />
                    </div>
                </div>
                <div className='page-template__right'>

                    <div className='page-template__tabs tabs'>
                        <TabContext value={item}>
                            <div className='page-template__typo'>
                                <h2 className='page-template__title'>Super Fast Production</h2>
                                <div className='page-template__group-button'>
                                    <button className='page-template__btn'><Check />Use template</button>
                                    <ButtonChange icon={DoneIcon}/>
                                    <ButtonChange icon={DeleteIcon}/>
                                </div>
                            </div>
                            <TabList className='tabs__list page-template__tabs-list' onChange={handleChangeItem}>
                                <Tab className='tabs__tab' item="3" disableRipple
                                     label={<div>Outline</div>}/>
                                <Tab className='tabs__tab' item="4" disableRipple
                                     label={<div>Ingredient</div>}/>
                                <Tab className='tabs__tab' item="5" disableRipple
                                     label={<div>Certify</div>}/>
                                <Tab className='tabs__tab' item="6" disableRipple
                                     label={<div>Package</div>}/>
                                <Tab className='tabs__tab' item="7" disableRipple
                                     label={<div>Test</div>}/>
                                <Tab className='tabs__tab' item="8" disableRipple
                                     label={<div>Manufacture</div>}/>
                            </TabList>
                                <TabPanel item="3" sx={{p: 0}}>
                                    Outline Content
                                </TabPanel>
                                <TabPanel item="4" sx={{p: 0}}>
                                    Ingredient Content
                                </TabPanel>
                                <TabPanel item="5" sx={{p: 0}}>
                                    Certify Content
                                </TabPanel>
                                <TabPanel item="6" sx={{p: 0}}>
                                    Package Content
                                </TabPanel>
                                <TabPanel item="7" sx={{p: 0}}>
                                    Test Content
                                </TabPanel>
                                <TabPanel item="8" sx={{p: 0}}>
                                    Manufacture Content
                                </TabPanel>
                        </TabContext>
                    </div>


                    <TabContext value={value}>
                        <div className='page-template__block'>
                            <TabPanel value="1" sx={{p: 0}}>
                            </TabPanel>
                            <TabPanel value="2" sx={{p: 0}}>
                                <BoxTemplate children={
                                    <article>
                                        <Checkbox text="Toner concept and prescription suggestions"/>
                                        <Checkbox text="Review of toner concept and sales strategy"/>
                                        <Checkbox text="Weekly customer meeting"/>
                                        <Checkbox text="Customer meeting and subsidiary material review"/>
                                        <Checkbox
                                            text="Supply and demand of additional supporting data (data based on functional labeling, separate emission labeling, etc.)"/>
                                        <Checkbox text="Raw material inspection"/>
                                        <Checkbox text="Raw material inspection"/>
                                    </article>
                                }
                                />

                                <BoxTemplate children={
                                    <article>
                                        <p>
                                            Quotation contents<br/>
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
                                            Quotation contents<br/>
                                            is here
                                        </p>
                                    </article>
                                }
                                />
                            </TabPanel>
                        </div>
                    </TabContext>
                </div>
            </div>
        </div>
    );
}

export default PageTemplate;