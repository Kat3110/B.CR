import * as React from 'react';
import './style.css'
import { ReactComponent as Change } from "../../assets/change.svg";
import { ReactComponent as Lock } from "../../assets/LockLaminated.svg";
import { ReactComponent as CaretRight } from "../../assets/CaretRight.svg";
import { ReactComponent as LockSimpleOpen } from "../../assets/LockSimpleOpen.svg";
import { ReactComponent as TrashGray } from "../../assets/TrashGray.svg";
import { ReactComponent as ChatCircleText } from "../../assets/ChatCircleText.svg";
import { ReactComponent as ShareNetwork } from "../../assets/ShareNetwork.svg";


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
                {props.changeGroup ?
                    <div className="box-template__group">
                        <div className="box-template__item"><LockSimpleOpen /></div>
                        <div className="box-template__item"><ChatCircleText /></div>
                        <div className="box-template__item"><TrashGray /></div>
                        <div className="box-template__item"><ShareNetwork /></div>
                        <div className="box-template__change"><CaretRight /></div>
                    </div>
                    : null
                }
                {props.change ? <div className="box-template__change"><Change /></div> : null}
                {props.lock ? <div className="box-template__lock"><Lock /></div> : null}
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