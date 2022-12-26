import * as React from 'react';
import './style.css'


function GroupButton(props) {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <div className='group-btn' style={{ justifyContent: props.justify ? props.justify : null }}>
            <button className='group-btn__cancel' onClick={props.close}>Cancel</button>
            <button className='group-btn__confirm' onClick={props.close} autoFocus>
                Confirm
            </button>
        </div>
    );
}

export default GroupButton;