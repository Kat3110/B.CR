import * as React from 'react';
import {useState} from "react";
import './create-project.css'
import DialogUploadImg from "../../components/dialog-upload-img";
import BackgroundImg from "../../components/background-img";
import bcgCreate from '../../assets/bcgCreate.svg'
import emptyPicture from '../../assets/emptyPicture.svg'
import DialogTemplates from '../../components/dialog-templates'
import bgImage from "../../assets/maskBG.png";
import bgImage2 from "../../assets/maskBG2.jpg";


function CreateProject(props) {
    const [status, setStatus] = useState(true)

    return (
        <div className='create-project'>
            {status ?
                <div className='create-project__before'>
                    { props.join ?
                        <BackgroundImg background={bgImage2}/>
                        :
                        <BackgroundImg background={bgImage}/>
                    }
                    <h2 className='create-project__typo'>
                        { props.join ?
                            'We join your awesome project!'
                            :
                            'We need your awesome project!'
                        }
                    </h2>
                    <p className='create-project__subtitle'>
                        { props.join ?
                                <>You can view the contents after invited to the project.<br/>
                                Please ask the PM for an invitation and try again.</>
                            :
                                <>B.CR is the best collaboration tool to<br/>
                                successfully launch your project.</>
                        }

                    </p>

                        { !props.join ?
                            <button onClick={() => setStatus(!status)} className='create-project__make create-project__button'>Make a project</button>
                            :
                            <div className='create-project__button-group'>
                                <a href='/projects/all' className='create-project__projects create-project__button'>Projects</a>
                                <button className='create-project__home create-project__button'>Home Feed</button>
                            </div>
                        }
                </div> :
                <div className='create-project__after'>
                    <img src={bcgCreate} alt='.'/>
                    <div className='create-project__box'>
                        <div className='create-project__picture'>
                            <img src={emptyPicture} alt='.'/>
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