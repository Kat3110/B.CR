import * as React from 'react';
import Smail from '../../assets/SmileyWink.svg'
import MainTitle from "../main-title";
import './style.css'


function BoxBlur(props) {
    return (
            <div className='box-blur'>
                <div className='box-blur__block'>
                    <img src={Smail} alt="Smail"/>
                    <p className='box-blur__block_subtitle'>There are no project.</p>
                </div>
            </div>
    );
}

export default BoxBlur;