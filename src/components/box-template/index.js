import * as React from 'react';
import './style.css'


function BoxTemplate(props) {
    return (
        <div className='box-template'>
            <div className='box-template__img'></div>
            <div className='box-template__content'>
                {props.children}
            </div>
        </div>
    );
}

export default BoxTemplate;