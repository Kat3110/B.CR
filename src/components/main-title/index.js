import * as React from 'react';
import './style.css'


function MainTitle(props) {
    return (
        <h2 className='main-title'>
            <img src={props.image}/>
            {props.title}
        </h2>
    );
}

export default MainTitle;