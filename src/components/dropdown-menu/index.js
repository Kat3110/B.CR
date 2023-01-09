import * as React from 'react';
import Menu from '@mui/material/Menu';
import './dropdown-menu.css'
export default function DropdownMenu(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='dropdown-menu'>
            <div
                className='dropdown-menu__trigger'
                id={props.id}
                aria-controls={open ? props.id : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.changeTrigger ?
                    open ? props.changeTrigger : props.trigger
                    :
                    props.trigger
                }
            </div>
            <Menu
                className={`dropdown-menu__content ${ props.nameClass }`}
                id={props.id}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                {props.content}
            </Menu>
        </div>
    );
}