import * as React from 'react';
import {useState} from "react";
import './style.css'
import Checkbox from "../../components/checkbox";
import CheckboxTemplate from "../../components/checkbox-template";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import BoxTemplate from "../../components/box-template";
import {ReactComponent as IconMusic} from "../../assets/MusicNotesSimple.svg";
import ButtonChange from "../../components/button-change";
import {ReactComponent as DeleteIcon} from "../../assets/Trash.svg";
import {ReactComponent as DoneIcon} from '../../assets/PencilSimpleLine.svg';
import {ReactComponent as DoneIcon1} from '../../assets/PencilSimpleLine.svg';
import { NavLink } from "react-router-dom";

import {ReactComponent as Check} from '../../assets/Check.svg';
import TextField from '@mui/material/TextField';
import ChipsDelete from "../../components/chip-delete";

import ProjectsLayout from "../../layout/projects-layout"
import DialogCancel from "../../components/dialog-cancel";

const arrayCheckboxTemplate = [
    {
        title: 'Seasonal Promotion: Standard Course',
        time: 'Aug 3, 2022 at 11:27 AM'
    },
    {
        title: 'Unbreakable process',
        time: 'Aug 3, 2022 at 11:27 AM',
        check: true
    },
    {
        title: 'Super Fast Production',
        time: 'Aug 3, 2022 at 11:27 AM'
    },
    {
        title: 'Never failed template',
        time: 'Aug 3, 2022 at 11:27 AM'
    },
    {
        title: 'Communication like magic',
        time: 'Aug 3, 2022 at 11:30 AM'
    }
]

const arrayListTabs = [
    {
        value: '1',
        label: 'Outline'
    },
    {
        value: '2',
        label: 'Ingredient'
    },
    {
        value: '3',
        label: 'Certify'
    },
    {
        value: '4',
        label: 'Package'
    },
    {
        value: '5',
        label: 'Test'
    },
    {
        value: '6',
        label: 'Manufacture'
    },
]

const arrayCheckboxes = [
    {
        text: 'Toner concept and prescription suggestions'
    },
    {
        text: 'Review of toner concept and sales strategy'
    },
    {
        text: 'Weekly customer meeting'
    },
    {
        text: 'Customer meeting and subsidiary material review'
    },
    {
        text: 'Supply and demand of additional supporting data (data based on functional labeling, separate emission labeling, etc.)'
    },
    {
        text: 'Raw material inspection'
    },
    {
        text: 'Raw material inspection'
    },

]

function PageTemplate() {

    const [edit, setEdit] = useState(true)

    const [value, setValue] = React.useState('2');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='page-template'>
            <ProjectsLayout
                links={
                    <div className='tabs__list'>
                        <NavLink to='/projects/all' style={{ textDecoration: 'none' }}>
                            <div className='tabs__tab'>
                                <div>Projects</div>
                            </div>
                        </NavLink>
                        <div className='tabs__tab Mui-selected'>
                            <div>Templates</div>
                        </div>
                    </div>}
                checkboxes={
                    <div className='page-template__checkboxes'>
                        <Checkbox text='Show Only My Templates' color="rgba(0,0,0,0.5)"/>
                        {arrayCheckboxTemplate.map((checkbox) => (
                            <CheckboxTemplate
                                check={checkbox.check}
                                title={checkbox.title}
                                time={checkbox.time}
                                key={checkbox.time+checkbox.title}
                            />))
                        }
                    </div>
                }
                tabs={
                    <>
                        {edit ?
                            <div className='project-layout__tabs tabs'>
                                <TabContext value={value}>
                                    <div className='page-template__typo'>
                                        <h2 className='page-template__title'>Super Fast Production</h2>
                                        <div className='page-template__group-button'>
                                            <button className='page-template__btn'><Check/>Use template</button>
                                            <div onClick={() => setEdit(!edit)}>
                                                <ButtonChange icon={<DoneIcon />}/>
                                            </div>
                                            <ButtonChange icon={<DeleteIcon />}/>
                                        </div>
                                    </div>
                                    <TabList className='tabs__list page-template__tabs-list' onChange={handleChange}>
                                        {arrayListTabs.map((tab) => (
                                            <Tab
                                                className='tabs__tab'
                                                value={tab.value}
                                                disableRipple
                                                label={<div>{tab.label}</div>}
                                                key={tab.value}
                                            />))
                                        }
                                    </TabList>
                                    {arrayListTabs.map((tab) => (
                                        <TabPanel
                                            value={tab.value}
                                            sx={{p: 0}}
                                            key={tab.value}
                                        ></TabPanel>))
                                    }
                                </TabContext>
                            </div>
                            :
                            <div className='project-layout__tabs page-template__tabs-change tabs'>
                                <div className='page-template__typo'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        defaultValue="Dr.G First Project"
                                    />
                                    <div className='page-template__group-button'>
                                        <DoneIcon1/>
                                        <DialogCancel />
                                        <button onClick={() => setEdit(!edit)}
                                                className='page-template__btn-save'>Save
                                        </button>
                                    </div>
                                </div>
                                <ChipsDelete/>
                            </div>
                        }
                    </>
                }
                content={
                    <div className='page-template__block'>
                        <BoxTemplate
                            children={
                                <article>
                                    {arrayCheckboxes.map((checkbox, index) => (
                                        <Checkbox
                                            text={checkbox.text}
                                            key={index}
                                        />))
                                    }
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
                    </div>
                }
            />
        </div>
    );
}

export default PageTemplate;