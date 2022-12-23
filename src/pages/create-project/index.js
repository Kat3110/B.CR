import * as React from 'react';
import './style.css'


function CreateProject(props) {
    return (
        <div className='page'>
            <h2 className='page__title'>We need your awesome project!</h2>
            <p className='page__subtitle'>B.CR is the best collaboration tool to<br/>
                successfully launch your project.</p>
            <button className='page__btn'>Make a project</button>
        </div>
    );
}

export default CreateProject;