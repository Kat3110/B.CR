import * as React from "react";
import './style.css';
import BackgroundImg from "../../components/background-img";
import bgImage2 from "../../assets/maskBG2.jpg";
import InputSearch from "../../components/input-search";
import BoxBlur from "../../components/box-blur";

function ProjectsLayout(props) {
    return (
        <div className="project-layout">
            <BackgroundImg background={bgImage2}/>
            <div className='project-layout__box container'>
                <div className='project-layout__left'>
                    <div className='project-layout__items'>
                        <div className='tabs'>
                            {props.links}
                            <InputSearch/>
                        </div>
                    </div>
                    { props.checkboxes ? props.checkboxes : <BoxBlur hght='233px' text='No projects.'/> }
                </div>
                <div className='project-layout__right'>
                { props.right ? props.right : <BoxBlur hght='450px' text='No projects.'/> }
                </div>
            </div>
        </div>
    );
}

export default ProjectsLayout;