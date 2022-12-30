import * as React from 'react';
import './style.css'
import { NavLink } from "react-router-dom";
import ProjectsLayout from "../../layout/projects-layout"
import { ReactComponent as Plus } from '../../assets/Plus.svg'
import RadioProjects from "../../components/radio-projects";
import Img from "../../assets/icon1.jpg";
import Img2 from "../../assets/icon2.jpg";
import Img3 from "../../assets/icon3.jpg";
import Img4 from "../../assets/icon4.jpg";

const arrayRadioProjects = [
    {
        check: true,
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
        id: 2
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
        id: 5
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
        id: 7
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


function PageProjects() {
    return (
        <div className='page-projects'>
            <ProjectsLayout
                links={
                <div className='tabs__list'>
                    <div className='tabs__tab Mui-selected'>
                        <div>Projects</div>
                    </div>
                    <NavLink to='/projects/template' style={{ textDecoration: 'none' }}>
                        <div className='tabs__tab'>
                            <div>Templates</div>
                        </div>
                    </NavLink>
                    <button className='page-projects__btn'>
                        <Plus />
                        Add project
                    </button>
                </div>
            }
                checkboxes={
                <div className='radio-projects__checkboxes'>
                    {arrayRadioProjects.map((radio) => (
                        <RadioProjects
                            check={radio.check}
                            img={radio.img}
                            color={radio.color}
                            title={radio.title}
                            name={radio.name}
                            pinned={radio.pinned}
                            key={radio.id}
                        />))}
                </div>}
            />
        </div>
    );
}

export default PageProjects;