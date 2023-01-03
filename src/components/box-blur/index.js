import * as React from 'react';
import Smail from '../../assets/SmileyWink.svg'
import './style.css'


function BoxBlur(props) {
    return (
        <div className='box-blur'>
            <div className='box-blur__block' style={{height: props.hght}}>
                <img src={Smail} alt="Smail"/>
                <p className='box-blur__subtitle'>{props.text}</p>
            </div>
        </div>
    );
}

export default BoxBlur;