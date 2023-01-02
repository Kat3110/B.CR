import * as React from 'react';
import Menu from '@mui/material/Menu';
import './style.css'
import bell from "../../assets/Bell.svg";
import Badge from "@mui/material/Badge";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import NotificationMessage from "../notification-message";

const arrayTabList = [
    {
        value: '1',
        badge: 2,
        label: 'Update'
    },
    {
        value: '2',
        badge: 25,
        label: 'Update'
    },
    {
        value: '3',
        label: 'Notice'
    }
]

const arrayNotificationMessage = [
    {
        color: '#00E99E',
        name: 'Hubert Benjamin',
        content: 'You have been invited to',
        charis: 'Charis',
        time: '5 min. ago',
        text: 'Charis 2023 Summer Kids Package'
    },
    {
        color: '#8F00FF',
        name: 'Yves Saint Laurent',
        content: 'You have been invited to',
        charis: 'Charis',
        time: '5 min. ago',
        text: 'Charis 2023 Summer Kids Package'
    }
]

const arrayTwoNotificationMessage = [
    {
        color: '#8F00FF',
        name: 'Yves Saint Laurent',
        content: 'You have been invited to',
        charis: 'Charis',
        time: '5 min. ago',
        text: 'Charis 2023 Summer Kids Package'
    },
    {
        color: '#00E99E',
        name: 'Hubert Benjamin',
        content: 'You have been invited to',
        charis: 'Charis',
        time: '5 min. ago',
        text: 'Charis 2023 Summer Kids Package'
    }
]

export default function DropdownNotification(props) {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='dropdown-notification'>
            <div
                className='dropdown-notification__trigger'
                id={props.id}
                aria-controls={open ? props.id : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Badge className='dropdown-notification__badge' badgeContent={27}>
                    <div
                        className='dropdown-notification__icon'>
                        <img src={bell}/>
                    </div>
                </Badge>
            </div>
            <Menu
                className='dropdown-notification__menu'
                id={props.id}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className='tabs'>
                    <TabContext value={value}>
                        <div>
                            <TabList className='tabs__list' onChange={handleChange}>
                                {arrayTabList.map((tab) => (
                                    <Tab
                                        className='tabs__tab'
                                        value={tab.value}
                                        disableRipple
                                        key={tab.value}
                                        label={
                                            tab.badge ?
                                            <Badge
                                                className='dropdown-notification__badge'
                                                badgeContent={tab.badge ? tab.badge : null}>
                                                <div>{tab.label}</div>
                                            </Badge> :
                                            <div>{tab.label}</div>
                                        }
                                    />
                                ))}
                            </TabList>
                        </div>
                        <TabPanel value="1" sx={{p: 0}}>
                            <div className='dropdown-notification__panel'>
                                <div>
                                    <Badge color="secondary" variant="dot"
                                           className='dropdown-notification__badge dropdown-notification__dot'>
                                        <p className='dropdown-notification__title'>Unread</p>
                                    </Badge>
                                    <div className='dropdown-notification__message'>
                                        {arrayNotificationMessage.map((message, index) => (
                                            <NotificationMessage
                                                color={message.color}
                                                name={message.name}
                                                content={message.content}
                                                charis={message.charis}
                                                time={message.time}
                                                text={message.text}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className='dropdown-notification__title'>Read</p>
                                    <div className='dropdown-notification__message'>
                                        {arrayNotificationMessage.map((message, index) => (
                                            <NotificationMessage
                                                color={message.color}
                                                name={message.name}
                                                content={message.content}
                                                charis={message.charis}
                                                time={message.time}
                                                text={message.text}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="2" sx={{p: 0}}>
                            <div className='dropdown-notification__panel'>
                                <div>
                                    <Badge color="secondary" variant="dot"
                                           className='dropdown-notification__badge dropdown-notification__dot'>
                                        <p className='dropdown-notification__title'>Unread</p>
                                    </Badge>
                                    <div className='dropdown-notification__message'>
                                        {arrayTwoNotificationMessage.map((message, index) => (
                                            <NotificationMessage
                                                color={message.color}
                                                name={message.name}
                                                content={message.content}
                                                charis={message.charis}
                                                time={message.time}
                                                text={message.text}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className='dropdown-notification__title'>Read</p>
                                    <div className='dropdown-notification__message'>
                                        {arrayNotificationMessage.map((message, index) => (
                                            <NotificationMessage
                                                color={message.color}
                                                name={message.name}
                                                content={message.content}
                                                charis={message.charis}
                                                time={message.time}
                                                text={message.text}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="3" sx={{p: 0}}>
                            <div className='dropdown-notification__panel'>
                                <div>
                                    <Badge color="secondary" variant="dot"
                                           className='dropdown-notification__badge dropdown-notification__dot'>
                                        <p className='dropdown-notification__title'>Unread</p>
                                    </Badge>
                                    <div className='dropdown-notification__message'>
                                        {arrayNotificationMessage.map((message, index) => (
                                            <NotificationMessage
                                                color={message.color}
                                                name={message.name}
                                                content={message.content}
                                                charis={message.charis}
                                                time={message.time}
                                                text={message.text}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className='dropdown-notification__title'>Read</p>
                                    <div className='dropdown-notification__message'>
                                        {arrayTwoNotificationMessage.map((message, index) => (
                                            <NotificationMessage
                                                color={message.color}
                                                name={message.name}
                                                content={message.content}
                                                charis={message.charis}
                                                time={message.time}
                                                text={message.text}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                </div>
            </Menu>
        </div>
    );
}