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
            <img
                src={props.backgroundMobile ? props.backgroundMobile : props.background}
                className="background-img--mobile"
                alt="background"
            />
        </>
    );
}

export default BackgroundImg;
