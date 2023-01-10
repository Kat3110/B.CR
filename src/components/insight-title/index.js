import * as React from 'react';
import './insight-title.css'


function InsightTitle(props) {
    return (
        <h3 className='insight-title'>
            {props.image} {props.title}
        </h3>
    );
}

export default InsightTitle;