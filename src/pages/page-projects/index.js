import * as React from 'react';
import './page-projects.css'
import ProjectsLayout from "../../layout/projects-layout"
import { ReactComponent as Plus } from '../../assets/Plus.svg'
import RadioProjects from "../../components/radio-projects";
import Img from "../../assets/icon1.jpg";
import Img2 from "../../assets/icon2.jpg";
import Img3 from "../../assets/icon3.jpg";
import Img4 from "../../assets/icon4.jpg";
import TabContext from "@mui/lab/TabContext";
import {ReactComponent as Change} from "../../assets/change.svg";
import ButtonChange from "../../components/button-change";
import {ReactComponent as DoneIcon} from "../../assets/PencilSimpleLine.svg";
import {ReactComponent as DoneIcon1} from "../../assets/PencilSimpleLine.svg";
import {ReactComponent as Download} from "../../assets/Download.svg";
import TextField from "@mui/material/TextField";
import BoxTemplate from "../../components/box-template";
import Checkbox from "../../components/checkbox";
import {ReactComponent as IconMusic} from "../../assets/MusicNotesSimple.svg";
import {useState} from "react";
import CapitalLetter from "../../components/capital-letter";
import DropdownMenu from "../../components/dropdown-menu";
import CheckboxCustom from "../../components/checkbox-custom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Microphone } from "../../assets/microphone.svg";
import { ReactComponent as Close } from "../../assets/Plus.svg";
import HTMLTooltip from '../../components/custom-tooltip'
import { ReactComponent as ChatCircle } from '../../assets/ChatCircle.svg'
import CheckboxesDelete from "../../components/checkboxes-delete";
import DialogCancel from "../../components/dialog-cancel";
import DialogSave from "../../components/dialog-save";
import DialogMembers from "../../components/dialog-members";
import DialogFiles from "../../components/dialog-files";
import DialogUrl from "../../components/dialog-url";


const arrayRadioProjects = [
    {
        check: true,
        completed: true,
        img: Img,
        color: '',
        title: 'Dr.G First Project',
        name: 'Yves Saint Laurent',
        pinned: false,
        id: 1
    },
    {
        check: false,
        img: Img2,
        color: '',
        title: 'Espoir 2024 Spring Project',
        name: 'Hubert Benjamin',
        pinned: false,
        id: 2,
        badge: 5
    },
    {
        check: false,
        img: Img3,
        color: '',
        title: 'Centellian 24+ Renewal',
        name: 'Hubert Benjamin',
        pinned: false,
        id: 3
    },
    {
        check: false,
        img: Img,
        color: '',
        title: 'Moonshot Secret Project',
        name: 'Yves Saint Laurent',
        pinned: false,
        id: 4
    },
    {
        check: false,
        img: Img4,
        color: '',
        title: 'Charis 2023 Summer Kids Package',
        name: 'Hubert Benjamin',
        pinned: false,
        id: 5,
        badge: 12
    },
    {
        check: false,
        img: Img,
        color: '',
        title: 'Charis 2023 Summer Kids Package',
        name: 'Hubert Benjamin',
        pinned: false,
        id: 6
    },
    {
        check: false,
        img: Img3,
        color: '',
        title: 'Moonshot Secret Project',
        name: 'EDGAR',
        pinned: false,
        id: 7,
        badge: 12
    },
    {
        check: false,
        img: Img4,
        color: '',
        title: 'Centellian 24+ Renewal',
        name: 'Benjamin Hubert',
        pinned: false,
        id: 8
    },
    {
        check: false,
        img: Img,
        color: '',
        title: 'Centellian 24+ Renewal',
        name: 'Benjamin Hubert',
        pinned: false,
        id: 9
    },
]

const arrayListCustom = [
    {
        value: 0,
        label: 'Outline',
        checked: 'checked'
    },
    {
        value: 1,
        label: 'Ingredient'
    },
    {
        value: 2,
        label: 'Certify'
    },
    {
        value: 3,
        label: 'Package'
    },
    {
        value: 4,
        label: 'Test'
    },
    {
        value: 5,
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

const arrayCapitalLetter = [
    {
        letter: 'p',
        bgColor: '#00A3FF'
    },
    {
        letter: 'u',
        bgColor: '#FFD702'
    },
    {
        letter: 'h',
        bgColor: '#00E99E'
    },
    {
        letter: 't'
    },
    {
        letter: 'a'
    },
]

function PageProjects() {

    const [edit, setEdit] = useState(true)

    const [value, setValue] = React.useState('2');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const changeClass = (e) => {
        let allCustoms = document.querySelectorAll('.page-projects__custom')

        if (e.target.classList.contains('page-projects__custom-active')) {
            e.target.classList.remove('page-projects__custom-active')
        } else {
            allCustoms.forEach(item => item.classList.remove('page-projects__custom-active'))
            e.target.classList.add('page-projects__custom-active')
        }
    };

    return (
        <div className='page-projects'>
            <ProjectsLayout
                projects={true}

                checkboxes={
                    <>
                        <div className='radio-projects__checkboxes'>
                            {arrayRadioProjects.map((radio) => (
                                <RadioProjects
                                    check={radio.check}
                                    completed={radio.completed}
                                    img={radio.img}
                                    color={radio.color}
                                    title={radio.title}
                                    name={radio.name}
                                    pinned={radio.pinned}
                                    badge={radio.badge}
                                    key={radio.id}
                                />))}
                        </div>
                        <div className="page-projects__overflow"></div>
                    </>
                }

                tabs={
                    <>
                        {edit ?
                            <div className='project-layout__tabs tabs'>
                                <TabContext value={value}>
                                    <div className='page-projects__typo page-template__typo'>
                                        <div className='page-projects__card page-template__card'>
                                            <img src={Img} alt="" style={{width: '50px'}} />
                                            <h2 className='page-projects__title page-template__title'>Dr.G First Project</h2>
                                        </div>
                                        <div className='page-projects__box page-template__box'>
                                            <div className='page-projects__account page-template__account project-card__accounts'>
                                                {arrayCapitalLetter.map((letter, index) => (
                                                    <CapitalLetter
                                                        letter={letter.letter}
                                                        bgColor={letter.bgColor}
                                                        key={index}
                                                    />))
                                                }
                                            </div>
                                            <div className='page-projects__group-button page-template__group-button'>
                                                {/*<ButtonChange icon={<Setting />}/>*/}
                                                <DialogMembers />
                                                <div onClick={() => setEdit(!edit)}>
                                                    <ButtonChange icon={<DoneIcon />}/>
                                                </div>
                                                <ButtonChange icon={<Download />}/>
                                                <DropdownMenu
                                                    id={2}
                                                    trigger={
                                                        <ButtonChange icon={<Change />}/>
                                                    }
                                                    content={
                                                        <div className='dropdown-menu__list'>
                                                            <div>
                                                                <ChatCircle /> Mention
                                                            </div>
                                                            <DialogFiles />
                                                            <DialogUrl />
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='page-projects__customs'>
                                        {arrayListCustom.map((custom,index) => (
                                            <div
                                                className='page-projects__custom'
                                                onClick={changeClass}
                                                key={index}>
                                                <HTMLTooltip
                                                    content={<CheckboxCustom />}
                                                    hover='Complete stage'
                                                />
                                                {custom.label}
                                            </div>
                                            ))
                                        }
                                    </div>
                                </TabContext>
                            </div>
                            :
                            <div className='project-layout__tabs tabs'>
                                <div className='page-projects__typo page-template__typo'>
                                    <div className='page-projects__card page-template__card'>
                                        <img src={Img} alt="" style={{width: '50px'}} />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            defaultValue="Dr.G First Project"
                                        />
                                    </div>
                                    <div className='page-projects__group-button page-template__group-button'>
                                        <DoneIcon1  className='page-projects__edit'/>
                                        <DialogCancel onClick={() => setEdit(!edit)} />
                                        <DialogSave  onClick={() => setEdit(!edit)}/>
                                    </div>
                                </div>
                                <CheckboxesDelete data={arrayListCustom}/>
                            </div>
                        }
                    </>
                }

                content={
                    <>
                        <div className='page-projects__council page-template__council'>
                            <Logo />
                            <div className='page-projects__council-box page-template__council-box'>
                                <span>
                                    <Microphone />
                                    NOTICE
                                </span>
                                <p className='page-projects__council-text page-template__council-text'>Toner concept and prescription suggestions  ...</p>
                                <div className='page-projects__council-close page-template__council-close'>
                                    <Close />
                                </div>
                            </div>
                        </div>
                        <div className='page-projects__block page-template__block'>
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
                                changeGroup
                                name="Hubert Benjamin"
                                date='1 days ago'
                                bgColor= '#00E99E'
                            />

                            <BoxTemplate
                                children={
                                    <article>
                                        <p>
                                            Quotation contents<br/>
                                            is here
                                        </p>
                                    </article>
                                }
                                change
                                name="EDGAR"
                                date='1 days ago'
                                bgColor= '#00A3FF'
                            />

                            <BoxTemplate
                                children={
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
                                name="Yves Saint Laurent"
                                date='1 days ago'
                                bgColor= '#8F00FF'
                            />

                            <BoxTemplate
                                children={
                                    <article>
                                        <div className='audio'>
                                            <div className='audio__icon'>
                                                <IconMusic/>
                                            </div>
                                            Audio.mp3
                                        </div>
                                    </article>
                                }
                                change
                                name="Yves Saint Laurent"
                                date='1 days ago'
                                bgColor= '#FFD702'
                            />

                            <BoxTemplate
                                children={
                                    <article>
                                        <p>
                                            Quotation contents<br/>
                                            is here
                                        </p>
                                    </article>
                                }
                                lock
                                name="EDGAR"
                                date='1 days ago'
                                bgColor= '#8F00FF'
                            />
                        </div>
                        <div className='page-projects__add'><Plus /></div>
                    </>
                }
            />
        </div>
    );
}

export default PageProjects;