import * as React from 'react';
import './main-title.css'


function MainTitle(props) {
    return (
        <h2 className='main-title'>
            {props.image ? <img src={props.image}/> : null  }
            {props.title}
        </h2>
    );
}

export default MainTitle;