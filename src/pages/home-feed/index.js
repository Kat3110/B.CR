import * as React from 'react';
import flag from '../../assets/Flag.svg'
import circleDots from '../../assets/ChatCircleDots.svg'
import bell from '../../assets/Bell.svg'
import microphone from '../../assets/microphone.svg'
import idea from '../../assets/IdeaI.svg'
import cardImg from '../../assets/cardImg.png'
import cardImg2 from '../../assets/cardImg2.png'
import cardImg3 from '../../assets/cardImg3.png'
import cardImg4 from '../../assets/cardImg4.png'
import BoxBlur from '../../components/box-blur'
import BackgroundImg from '../../components/background-img'
import bgImage from '../../assets/maskBG.png';
import MentionCard from "../../components/mention-card";
import ChannelsCard from "../../components/channels-card";
import ProjectCard from "../../components/project-card";
import MainTitle from "../../components/main-title";

import './home-feed.css'
import ArrowUUpLeft from "../../assets/ArrowUUpLeft.svg";
import ArrowElbowLeft from "../../assets/ArrowElbowLeft.svg";
import TrendUp from "../../assets/TrendUp.svg";
import TrendDown from "../../assets/TrendDown.svg";
import InsightsCard from "../../components/insights-card";

const arrayOneChannelsCard = [
    {
        time: '5 Min.',
        content: 'You have been invited to',
        charis: ' Charis.',
        color: '#00A3FF',
        name: 'Angelica'
    },
    {
        time: '27 Min.',
        content: 'You have been invited to',
        charis: ' Charis.',
        color: '#FFD702',
        name: 'EDGAR'
    },
]

const arrayTwoChannelsCard = [
    {
        time: '5 Min.',
        content: 'Announcement.',
        name: 'Aron H.',
        email: 'aron@email.com'
    },
    {
        time: '5 Min.',
        content: 'After completing the concept step, move to the next step.',
        name: 'Yves Saint Laurent',
        email: 'yvessaint@email.com'
    },
    {
        time: '5 Min.',
        content: 'The ingredients will be changed as of October 25th.',
        name: 'Angelica',
        email: 'angelica@email.com'
    },
    {
        time: '5 Min.',
        content: 'Package design completed.',
        name: 'EDGAR',
        email: 'edgar@email.com'
    },
    {
        time: '5 Min.',
        content: 'Packaging design has been changed.',
        name: 'Hubert Benjamin',
        email: 'hubert@email.com'
    },
]

const arrayOneProjectCard = [
    {
        img: cardImg,
        content: 'Charis 2023 Summer Kids Package',
        time: ' 2 days ago',
        percent: 25,
        id: 1,
        accounts: [
            {letter: 'y', color: '#8F00FF', },
            {letter: 'e', color: '#00A3FF', },
            {letter: 'b', color: '#FF007A', },
            {letter: 'a', color: '#FFD702', },
            {letter: 'h', color: '#00E99E', },
            {letter: 'g' },
        ]
    },
    {
        img: cardImg2,
        content: 'Dr.G 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,  Christmas Production',
        time: '2 days ago',
        percent: 10,
        id: 2,
        accounts: [
            {letter: 'y', color: '#8F00FF' },
            {letter: 'h', color: '#00E99E', },
            {letter: 'b', color: '#FF007A', },
            {letter: 'k' },
            {letter: 'b' }
        ]
    },
    {
        img: cardImg3,
        content: 'Moonshot Secret Project',
        time: '2 days ago',
        percent: 35,
        id: 3,
        accounts: [
            {letter: 'e', color: '#00A3FF' },
            {letter: 'a', color: '#FFD702', },
            {letter: 'h', color: '#00E99E', },
            {letter: 'c' },
        ]
    },
    {
        img: cardImg4,
        content: 'Espoir 2024 Spring Project',
        time: '2 days ago',
        percent: 85,
        id: 4,
        accounts: [
            {letter: 'a', color: '#FFD702', },
            {letter: 'h', color: '#00E99E', },
            {letter: 'h' },
        ]
    },
    {
        img: cardImg,
        content: 'Charis 2023 Summer Kids Package',
        time: ' 2 days ago',
        percent: 25,
        id: 5,
        accounts: [
            {letter: 'y', color: '#8F00FF' },
            {letter: 'h', color: '#00E99E', },
            {letter: 'b', color: '#FF007A', },
            {letter: 'k' },
            {letter: 'b' },
        ]
    },
    {
        img: cardImg2,
        content: 'Dr.G 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,  Christmas Production',
        time: '2 days ago',
        percent: 10,
        id: 6,
        accounts: [
            {letter: 'a', color: '#FFD702', },
            {letter: 'h', color: '#00E99E', },
            {letter: 'h' },
        ]
    },
    {
        img: cardImg3,
        content: 'Moonshot Secret Project',
        time: '2 days ago',
        percent: 35,
        id: 7,
        accounts: [
            {letter: 'y', color: '#8F00FF', },
            {letter: 'e', color: '#00A3FF', },
            {letter: 'b', color: '#FF007A', },
            {letter: 'a', color: '#FFD702', },
            {letter: 'h', color: '#00E99E', },
            {letter: 'g' },
        ]
    },
    {
        img: cardImg4,
        content: 'Espoir 2024 Spring Project',
        time: '2 days ago',
        percent: 85,
        id: 8,
        accounts: [
            {letter: 'e', color: '#00A3FF' },
            {letter: 'a', color: '#FFD702', },
            {letter: 'h', color: '#00E99E', },
            {letter: 'c' },
        ]
    },
]

const arrayOneMentionCard = [
    {
        time: "5 Min.",
        color: '#00A3FF',
        firstName: 'Aron H.',
        secondName: 'You',
        button: 'Charis 2023 Summer Kids Package',
        id: 1
    }, {
        time: "5 Min.",
        color: '#FFD702',
        firstName: 'Yves Saint Laurent',
        secondName: 'You',
        button: 'Espoir 2024 Spring Project',
        id: 2
    },
    {
        time: "5 Min.",
        color: '#00E99E',
        firstName: 'EDGAR',
        secondName: 'You',
        button: 'Centellian 24+ Renewal',
        id: 3
    }
,]

const arrayInsightsCard = [
    {
        iconArrow: ArrowUUpLeft,
        text: 'Fastest response time',
        content: 'Moonshot Secret Project',
        number: '17',
        time: 'Minutes',
        color: '#00E99E',
        name: 'Aron H.'
    },
    {
        iconArrow: ArrowElbowLeft,
        text: 'Slowest response time',
        content: 'Dr.G 2022, 2023 Christmas',
        number: '35',
        time: 'Minutes',
        color: '#FFD702',
        name: 'AYves Saint Laurent'
    },
    {
        iconArrow: TrendUp,
        text: 'Largest data amount',
        content: 'Centellian 24+ Renewal',
        number: '5',
        time: 'Minutes',
        color: '#FFD702',
        name: 'Angelica'
    },
    {
        iconArrow: TrendDown,
        text: 'Smallest data amount',
        content: 'Espoir 2024 Spring Project',
        number: '42',
        time: 'Minutes',
        color: '#00A3FF',
        name: 'EDGAR'
    },
    {
        iconArrow: TrendUp,
        text: 'Largest data amount',
        content: 'Charis 2023 Summer Kids Package',
        number: '12',
        time: 'Minutes',
        color: '#00E99E',
        name: 'Hubert Benjamin'
    },
];

function HomeFeed() {
    return (<div className='home-feed'>
            <BackgroundImg background={bgImage} />
            <div className='home-feed__box container'>

                <div className='home-feed__projects'>
                    <MainTitle image={flag} title='Projects'></MainTitle>
                    {arrayOneProjectCard.length <= 0 ? <BoxBlur hght='110px' text='There are no project.'/> : <div className='home-feed__flex'>
                        <div className='home-feed__wrapper'>
                            {arrayOneProjectCard.map((card) => (<ProjectCard
                                    accounts={card.accounts}
                                    img={card.img}
                                    content={card.content}
                                    time={card.time}
                                    percent={card.percent}
                                    key={card.id+card.content}
                                />))}
                        </div>
                    </div>}
                </div>

                <div className='home-feed__update box-channels'>
                    <MainTitle image={bell} title='Update'></MainTitle>

                    <div>
                        {arrayOneChannelsCard.map((card) => (<ChannelsCard
                            color={card.color}
                            time={card.time}
                            content={card.content}
                            charis={card.charis}
                            name={card.name}
                            key={card.name}
                        />))}
                    </div>
                </div>

                <div className='home-feed__mention'>
                    <MainTitle image={circleDots} title='Mention'></MainTitle>

                    {arrayOneMentionCard.length <= 0 ? <BoxBlur hght='110px' text='There are no mention.'/> : <div className='home-feed__flex'>
                        {arrayOneMentionCard.map((card) => (
                            <MentionCard
                                color={card.color}
                                firstName={card.firstName}
                                time={card.time}
                                secondName={card.secondName}
                                button={card.button}
                                key={card.id+card.firstName}
                            />))}
                    </div>}
                </div>

                <div className='home-feed__notice box-channels'>
                    <MainTitle image={microphone} title='Notice'></MainTitle>

                    <div>
                        {arrayTwoChannelsCard.map((card) => (<ChannelsCard
                                time={card.time}
                                content={card.content}
                                name={card.name}
                                email={card.email}
                                key={card.name}
                            />))}
                    </div>
                </div>

                <div className='home-feed__insights box-channels'>
                    <MainTitle image={idea} title='Insights'></MainTitle>

                    <div className='home-feed__insights'>
                        {arrayInsightsCard.map((card) => (
                            <InsightsCard
                                iconArrow={card.iconArrow}
                                text={card.text}
                                content={card.content}
                                number={card.number}
                                time={card.time}
                                color={card.color}
                                name={card.name}
                                key={card.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>);
}

export default HomeFeed;
