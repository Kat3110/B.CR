import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './page-insight.css'
import BackgroundImg from "../../components/background-img";
import bgImage from "../../assets/maskBG.png";
import {ReactComponent as User} from "../../assets/Users.svg";
import {ReactComponent as Scroll} from "../../assets/Scroll.svg";
import {ReactComponent as ToggleRightfrom} from "../../assets/ToggleRight.svg";
import bgImage2 from "../../assets/maskBG2.jpg";
import InsightFilter from "../../components/insight-filter";
import ChartInsight from "../../components/chart-insight";
import Clock from "../../assets/ClockCounterClockwise.svg";
import MainTitle from "../../components/main-title";
import InsightTable from "../../components/insight-table";


function PageInsight(props) {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='page-insight'>
            <div className='page-insight__before'>
                {props.join ?
                    <BackgroundImg background={bgImage2}/>
                    :
                    <BackgroundImg background={bgImage}/>
                }
            </div>
            <div className='page-insight__box container'>
                <div className='page-insight__menu'>
                    <h2 className='page-insight__title'>Insights</h2>
                    <TabContext value={value} className='page-insight__tabs'>
                        <TabList
                            onChange={handleChange}
                            className='page-insight__list'
                        >
                            <Tab
                                disableRipple
                                label={<><ToggleRightfrom className='page-insight__svg'/>Dashboard</>}
                                value="1"
                                className='page-insight__tab'
                            />
                            <Tab
                                disableRipple
                                label={<><Scroll className='page-insight__svg'/>Projects data</>}
                                value="2"
                                className='page-insight__tab'
                            />
                            <Tab
                                disableRipple
                                label={<><User className='page-insight__svg'/>Users data</>}
                                value="3"
                                className='page-insight__tab'
                            />
                        </TabList>
                    </TabContext>
                </div>
                <div className="page-insight__content">
                    <TabContext value={value} className='page-insight__tabs'>
                        <TabPanel value="1">
                            <div className="page-insight__card">
                                <div className='page-insight__filter'>
                                    <MainTitle title='Dashboard'/>
                                    <InsightFilter title='Period' image={Clock} />
                                    <ChartInsight />
                                </div>
                                <div className='page-insight__filter'>
                                    <InsightFilter title='Data' image={Clock} />
                                    <ChartInsight />
                                </div>
                            </div>
                            <div className="page-insight__card">
                                <div className="page-insight__table">
                                    <MainTitle title='Projects data'/>
                                    <InsightTable />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">2</TabPanel>
                        <TabPanel value="3">3</TabPanel>
                    </TabContext>
                </div>

            </div>
        </div>
);
}

export default PageInsight;