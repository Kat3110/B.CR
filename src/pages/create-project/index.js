import * as React from 'react';
import {useState} from "react";
import './style.css'
import DialogUploadImg from "../../components/dialog-upload-img";
import BackgroundImg from "../../components/background-img";
import bcgCreate from '../../assets/bcgCreate.svg'
import emptyPicture from '../../assets/emptyPicture.svg'
import DialogTemplates from '../../components/dialog-templates'
import bgImage from "../../assets/maskBG.png";


function CreateProject() {
    const [status, setStatus] = useState(true)

    return (
        <div className='create-project'>
            {status ?
                <div className='create-project__before'>
                    <BackgroundImg background={bgImage}/>
                    <h2 className='create-project__typo'>We need your awesome project!</h2>
                    <p className='create-project__subtitle'>B.CR is the best collaboration tool to<br/>
                        successfully launch your project.</p>
                    <button onClick={() => setStatus(!status)} className='create-project__make'>Make a project</button>
                </div> :
                <div className='create-project__after'>
                    <img src={bcgCreate}/>
                    <div className='create-project__box'>
                        <div className='create-project__picture'>
                            <img src={emptyPicture}/>
                            <div className='create-project__edit'>
                                <DialogUploadImg/>
                            </div>
                        </div>
                        <div className='create-project__pattern'>
                            <input className='create-project__text' type="text"
                                   placeholder='Choose a template or start from the beginning.'/>
                            <div className='create-project__edit'>
                                <DialogTemplates />
                            </div>
                        </div>
                        <div className='create-project__block'>
                            <input className='create-project__title' type="text" placeholder='Enter the project title.'/>
                            <button className='create-project__btn'>Start!</button>
                        </div>

                    </div>
                </div>}
        </div>
    );
}

export default CreateProject;