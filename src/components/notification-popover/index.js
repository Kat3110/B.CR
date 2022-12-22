import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
import bell from "../../assets/Bell.svg";
import './style.css'


function NotificationPopover() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-notification-popover' : undefined;

    return (
        <>
            <Badge className='popover__badge' badgeContent={27}>
                <button
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                    className='popover__icon'>
                    <img src={bell}/>
                </button>
            </Badge>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
                transformOrigin={{vertical: 'top', horizontal: 'left',}} className='popover'>
                <div className='popover__box'>
                    <TabContext value={value}>
                        <div>
                            <TabList onChange={handleChange}>
                                <Tab className='popover__tab' value="1" disableRipple
                                     label={
                                         <Badge className='popover__badge'
                                                badgeContent={2}>
                                             <div>Update</div>
                                         </Badge>}/>
                                <Tab className='popover__tab' value="2" disableRipple
                                     label={
                                         <Badge className='popover__badge'
                                                badgeContent={25}>
                                             <div>Mention</div>
                                         </Badge>}/>
                                <Tab className='popover__tab' value="3" disableRipple
                                     label={<div>Notice</div>}/>
                            </TabList>
                        </div>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </div>
            </Popover>
        </>
    );
}

export default NotificationPopover;