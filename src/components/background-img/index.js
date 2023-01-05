import * as React from "react";
import './background-img.css';

function BackgroundImg(props) {
    return (
        <>
            <img
                src={props.background}
                className="background-img"
                alt="background"
            />
        </>
    );
}

export default BackgroundImg;