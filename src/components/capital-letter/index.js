import * as React from 'react';
import './capital-letter.css'

function CapitalLetter(props) {
    return (
        <span
            className="capital-letter"
            style={{
                backgroundColor: props.bgColor ? props.bgColor : 'black'
            }}
        >
            {props.letter}
        </span>
    );
}
export default CapitalLetter;
