import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
import bell from "../../assets/Bell.svg";
import NotificationMessage from "../notification-message";
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

    return (<>
        <Badge className='popover__badge' badgeContent={27}>
            <button
                aria-describedby={id}
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
            <div className='tabs'>
                <TabContext value={value}>
                    <div>
                        <TabList className='tabs__list' onChange={handleChange}>
                            <Tab className='tabs__tab' value="1" disableRipple
                                 label={<Badge className='popover__badge'
                                               badgeContent={2}>
                                     <div>Update</div>
                                 </Badge>}/>
                            <Tab className='tabs__tab' value="2" disableRipple
                                 label={<Badge className='popover__badge'
                                               badgeContent={25}>
                                     <div>Mention</div>
                                 </Badge>}/>
                            <Tab className='tabs__tab' value="3" disableRipple
                                 label={<div>Notice</div>}/>
                        </TabList>
                    </div>
                    <TabPanel value="1" sx={{p: 0}}>
                        <div className='popover__panel'>
                            <div>
                                <Badge color="secondary" variant="dot"
                                       className='popover__badge popover__panel_dot'>
                                    <p className='popover__panel_title'>Unread</p>
                                </Badge>
                                <div className='popover__message_box'>
                                    <NotificationMessage
                                        color='#00E99E'
                                        name='Hubert Benjamin'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                    <NotificationMessage
                                        color='#8F00FF'
                                        name='Yves Saint Laurent'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='popover__panel_title'>Read</p>
                                <div className='popover__message_box'>
                                    <NotificationMessage
                                        color='#00E99E'
                                        name='Hubert Benjamin'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                    <NotificationMessage
                                        color='#8F00FF'
                                        name='Yves Saint Laurent'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2" sx={{p: 0}}>
                        <div className='popover__panel'>
                            <div>
                                <Badge color="secondary" variant="dot"
                                       className='popover__badge popover__panel_dot'>
                                    <p className='popover__panel_title'>Unread</p>
                                </Badge>
                                <div className='popover__message_box'>
                                    <NotificationMessage
                                        color='#8F00FF'
                                        name='Yves Saint Laurent'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                    <NotificationMessage
                                        color='#00E99E'
                                        name='Hubert Benjamin'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='popover__panel_title'>Read</p>
                                <div className='popover__message_box'>
                                    <NotificationMessage
                                        color='#00E99E'
                                        name='Hubert Benjamin'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                    <NotificationMessage
                                        color='#8F00FF'
                                        name='Yves Saint Laurent'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="3" sx={{p: 0}}>
                        <div className='popover__panel'>
                            <div>
                                <Badge color="secondary" variant="dot"
                                       className='popover__badge popover__panel_dot'>
                                    <p className='popover__panel_title'>Unread</p>
                                </Badge>
                                <div className='popover__message_box'>
                                    <NotificationMessage
                                        color='#00E99E'
                                        name='Hubert Benjamin'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                    <NotificationMessage
                                        color='#8F00FF'
                                        name='Yves Saint Laurent'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='popover__panel_title'>Read</p>
                                <div className='popover__message_box'>
                                    <NotificationMessage
                                        color='#00E99E'
                                        name='Hubert Benjamin'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                    <NotificationMessage
                                        color='#8F00FF'
                                        name='Yves Saint Laurent'
                                        content='You have been invited to'
                                        charis='Charis'
                                        time='5 min. ago'
                                        text='Charis 2023 Summer Kids Package'
                                    />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </Popover>
    </>);
}

export default NotificationPopover;