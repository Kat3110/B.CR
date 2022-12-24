import * as React from 'react';
import './style.css'


function MakeProject() {
    return (
        <div className='make-project'>
            <h2 className='make-project__title'>We need your awesome project!</h2>
            <p className='make-project__subtitle'>B.CR is the best collaboration tool to<br/>
                successfully launch your project.</p>
            <button className='make-project__btn'>Make a project</button>
        </div>
    );
}

export default MakeProject;