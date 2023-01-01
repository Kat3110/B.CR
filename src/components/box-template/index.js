import * as React from 'react';
import './style.css'
import { ReactComponent as Change } from "../../assets/change.svg";


function BoxTemplate(props) {
    return (
        <div className='box-template'>
            <div className='box-template__img'
                 style={{
                     backgroundColor: props.bgColor ? props.bgColor : 'rgba(0, 0, 0, 0.05)'
                 }}
            >
                {props.name ? props.name[0] : null}
            </div>
            <div className='box-template__content'>
                {props.change ? <div className="box-template__change"><Change /></div> : null}
                {props.name ? <div className="box-template__box">
                    <span className="box-template__name">{props.name}</span>
                    <span className="box-template__manager">Manager</span>
                    {
                        props.date ? <span className="box-template__date">{props.date}</span> : null
                    }
                </div> : null}
                {props.children}
            </div>
        </div>
    );
}

export default BoxTemplate;