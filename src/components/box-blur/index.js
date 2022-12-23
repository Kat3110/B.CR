import * as React from 'react';
import Smail from '../../assets/SmileyWink.svg'
import './style.css'


function BoxBlur(props) {
    return (
            <div className='blur'>
                <h2 className='box__title'>
                    <img src={props.imag}/>
                    {props.title}
                </h2>
                <div className='blur__box'>
                    <img src={Smail} alt="Smail"/>
                    <p className='blur__box_subtitle'>There are no project.</p>
                </div>
            </div>
    );
}

export default BoxBlur;