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
import {ReactComponent as ToggleRightFrom} from "../../assets/ToggleRight.svg";
import bgImage2 from "../../assets/maskBG2.jpg";
import InsightFilter from "../../components/insight-filter";
import ChartInsight from "../../components/chart-insight";
import {ReactComponent as Clock} from "../../assets/ClockCounterClockwise.svg";
import {ReactComponent as Gauge} from "../../assets/Gauge.svg";
import MainTitle from "../../components/main-title";
import InsightTable from "../../components/insight-table";
import InsightTableTwo from "../../components/insight-table-two";
import InsightTableThree from "../../components/insight-table-three";
import InsightTableFour from "../../components/insight-table-four";
import InsightTableFive from "../../components/insight-table-five";
import InsightTableSix from "../../components/insight-table-six";
import InsightTableSeven from "../../components/insight-table-seven";
import InsightTableEight from "../../components/insight-table-eight";
import InsightTableProjects from "../../components/insight-table-projects";
import Button from "../../components/button";
import {ReactComponent as ArrowUpLeft} from "../../assets/ArrowUUpLeft.svg";
import {ReactComponent as ArrowElbowLeft} from "../../assets/ArrowElbowLeft.svg";
import {ReactComponent as TrendUp} from "../../assets/TrendUp.svg";
import {ReactComponent as TrendDown} from "../../assets/TrendDown.svg";
import ChipMember from "../../components/chip-member";
import InsightTableProjectsTwo from "../../components/insight-table-projects-two";
import InsightTableUsers from "../../components/insight-table-users";
import InsightTableUsersTwo from "../../components/insight-table-users-two";

const arrayChipInsight = [
    { key: 0,  firstWord: 'Period', label: '3 Months' },
    { key: 1, firstWord: 'Project', label: 'Dr.G 2022, 2023 Christmas' },
    { key: 2, firstWord: 'Step', label: 'Container' },
]


function PageInsight(props) {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [one, setOne] = React.useState(true);

    const handleClickOne = () => {
        setThree(false);
        if (!one) {
            setOne(true);
        }
    };

    const [three, setThree] = React.useState(false);

    const handleClickThree = () => {
        setOne(false);
        if (!three) {
            setThree(true);
        }
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
                                label={<><ToggleRightFrom className='page-insight__svg'/>Dashboard</>}
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
                                    <InsightFilter active title='Period' image={<Clock />} />
                                    <div className='page-insight__chart'>
                                        <ChartInsight />
                                    </div>
                                </div>
                                <div className='page-insight__filter'>
                                    <InsightFilter title='Data' image={<Gauge />} />
                                    <div className='page-insight__chart'>
                                        <ChartInsight />
                                    </div>
                                </div>
                            </div>
                            <div className="page-insight__card">
                                <div className="page-insight__table">
                                    <MainTitle title='Projects data'/>
                                    <InsightTable title={'Fastest response time'} image={<ArrowUpLeft />} />
                                </div>
                                <div className="page-insight__table">
                                    <InsightTableTwo title={'Slowest response time'} image={<ArrowElbowLeft />} />
                                </div>
                                <div className="page-insight__table">
                                    <InsightTableThree title={'Largest data amount'} image={<TrendUp />} />
                                </div>
                                <div className="page-insight__table">
                                    <InsightTableFour title={'Smallest data amount'} image={<TrendDown />} />
                                </div>
                            </div>
                            <div className="page-insight__card">
                                <div className="page-insight__table">
                                    <MainTitle title='Users data'/>
                                    <InsightTableFive title={'Fastest response time'} image={<ArrowUpLeft />} />
                                </div>
                                <div className="page-insight__table">
                                    <InsightTableSix title={'Slowest response time'} image={<ArrowElbowLeft />} />
                                </div>
                                <div className="page-insight__table">
                                    <InsightTableSeven title={'Largest data amount'} image={<TrendUp />} />
                                </div>
                                <div className="page-insight__table">
                                    <InsightTableEight title={'Smallest data amount'} image={<TrendDown />} />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className="page-insight__panel-two" value="2">
                            <div className="page-insight__card">
                                <div className='page-insight__filter'>
                                    <MainTitle title='Project Data'/>
                                    <InsightFilter />
                                </div>
                            </div>

                            <div>
                                <ChipMember array={arrayChipInsight} />

                                <div className="page-insight__card">
                                    <div className="page-insight__table">
                                        <div className='insight-table__btn-group'>
                                            <Button
                                                onClick={handleClickOne}
                                                color={one ? 'black' : 'default'}
                                                icon={<ArrowUpLeft />}
                                                text='Fastest response time'/>
                                            <Button
                                                icon={<ArrowElbowLeft />}
                                                text='Fastest response time' />
                                            <Button
                                                onClick={handleClickThree}
                                                color={three ? 'black' : 'default'}
                                                icon={<TrendUp />}
                                                text='Largest data amount'/>
                                            <Button
                                                icon={<TrendDown />}
                                                text='Smallest data amount' />
                                        </div>
                                        {one ? <InsightTableProjects /> : null }
                                        {three ? <InsightTableProjectsTwo /> : null }
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="3">
                            <div className="page-insight__card">
                                <div className='page-insight__filter'>
                                    <MainTitle title='Project Data'/>
                                    <InsightFilter />
                                </div>
                            </div>
                            <div className="page-insight__card">
                                <div className="page-insight__table">
                                    <div className='insight-table__btn-group'>
                                        <Button
                                            onClick={handleClickOne}
                                            color={one ? 'black' : 'default'}
                                            icon={<ArrowUpLeft />}
                                            text='Fastest response time'/>
                                        <Button
                                            icon={<ArrowElbowLeft />}
                                            text='Fastest response time' />
                                        <Button
                                            onClick={handleClickThree}
                                            color={three ? 'black' : 'default'}
                                            icon={<TrendUp />}
                                            text='Largest data amount'/>
                                        <Button
                                            icon={<TrendDown />}
                                            text='Smallest data amount' />
                                    </div>
                                    {one ? <InsightTableUsers /> : null }
                                    {three ? <InsightTableUsersTwo /> : null }
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                </div>

            </div>
        </div>
);
}

export default PageInsight;
