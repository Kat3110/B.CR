import * as React from 'react';
import './style.css'
import { NavLink } from "react-router-dom";
import ProjectsLayout from "../../layout/projects-layout"
import { ReactComponent as Plus } from '../../assets/Plus.svg'


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
                checkboxes="null"
            />
        </div>
    );
}

export default PageProjects;