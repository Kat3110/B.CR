import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Badge from "@mui/material/Badge";
import './style.css'

function TabsList() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <div>
                <TabList onChange={handleChange}>
                    <Tab className='popover__tab' value="1" disableRipple
                         label={<Badge className='popover__badge'
                                       badgeContent={2}>
                             <div>Update</div>
                         </Badge>}/>
                    <Tab className='popover__tab' value="2" disableRipple
                         label={<Badge className='popover__badge'
                                       badgeContent={25}>
                             <div>Mention</div>
                         </Badge>}/>
                    <Tab className='popover__tab' value="3" disableRipple
                         label={<div>Notice</div>}/>
                </TabList>
            </div>
        </TabContext>
    );
}

export default TabsList;