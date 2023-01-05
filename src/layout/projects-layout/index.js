import * as React from "react";
import './project-layout.css';
import BackgroundImg from "../../components/background-img";
import bgImage2 from "../../assets/maskBG2.jpg";
import InputSearch from "../../components/input-search";
import BoxBlur from "../../components/box-blur";
import {NavLink} from "react-router-dom";
import {ReactComponent as Plus} from "../../assets/Plus.svg";

function ProjectsLayout(props) {
    return (
        <div className="project-layout">
            <BackgroundImg background={bgImage2}/>
            <div className='project-layout__box container'>
                <div className='project-layout__left'>
                    <div className='project-layout__items'>
                        <div className='tabs'>
                            <div className='tabs__list'>
                            {props.projects ?
                                <>
                                    <div className='tabs__tab Mui-selected'>
                                        <div>Projects</div>
                                    </div>
                                    <NavLink to='/projects/template' style={{ textDecoration: 'none' }}>
                                        <div className='tabs__tab'>
                                            <div>Templates</div>
                                        </div>
                                    </NavLink>
                                    <button className='project-layout__btn'>
                                        <Plus />
                                        Add project
                                    </button>
                                </>
                                :
                                <>
                                    <NavLink to='/projects/all' style={{ textDecoration: 'none' }}>
                                        <div className='tabs__tab'>
                                            <div>Projects</div>
                                        </div>
                                    </NavLink>
                                    <div className='tabs__tab Mui-selected'>
                                        <div>Templates</div>
                                    </div>
                                </>
                            }
                            </div>
                            <InputSearch detailed={props.projects} />
                        </div>
                    </div>
                    { props.checkboxes ? props.checkboxes : <BoxBlur hght='233px' text='No projects.'/> }
                </div>
                <div className='project-layout__right'>
                    { props.tabs && props.content ?
                        <>
                            {props.tabs}
                            {props.content}
                        </>
                        : <BoxBlur hght='450px' text='No projects.'/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectsLayout;