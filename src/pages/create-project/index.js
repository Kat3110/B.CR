import * as React from 'react';
import './style.css'
import bcgCreate from '../../assets/bcgCreate.svg'
import emptyPicture from '../../assets/emptyPicture.svg'
import {ReactComponent as Edit} from '../../assets/PencilSimpleLine.svg'
import DialogUploadImg from "../../components/dialog-upload-img";


function CreateProject() {
    return (
        <div className='create-project'>
            <img src={bcgCreate}/>
            <div className='create-project__box'>
                <div className='create-project__picture'>
                    <img src={emptyPicture}/>
                    <div className='create-project__edit'>
                        <DialogUploadImg />
                    </div>
                </div>
                <div className='create-project__pattern'>
                    <input className='create-project__text' type="text"
                           placeholder='Choose a template or start from the beginning.'/>
                    <div className='create-project__edit'>
                        <Edit />
                    </div>
                </div>
                    <input className='create-project__title' type="text" placeholder='Enter the project title.'/>
                    <button className='create-project__btn'>Start!</button>
            </div>
        </div>
    );
}

export default CreateProject;