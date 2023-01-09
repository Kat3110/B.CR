import {styled} from "@mui/material/styles";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import * as React from "react";
import './custom-tooltip.css'

const HTMLTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}} placement="top"/>))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#404040',
        color: 'white',
        maxWidth: '258px',
        fontSize: '13px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid #404040',
        textAlign: 'center'
    },
}));

function CustomTooltip(props) {

    return (
        <span className="custom-tooltip">
        <HTMLTooltip title={props.hover}>
            <span
                className='custom-tooltip__content'
                style={{fontSize: props.size, fontWeight: props.weight}}
            >
                {props.content}
            </span>
        </HTMLTooltip>

        </span>
    );
}

export default CustomTooltip;