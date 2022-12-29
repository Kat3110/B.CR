import * as React from 'react';
import flag from '../../assets/Flag.svg'
import circleDots from '../../assets/ChatCircleDots.svg'
import bell from '../../assets/Bell.svg'
import microphone from '../../assets/microphone.svg'
import idea from '../../assets/IdeaI.svg'
import accA from "../../assets/accA.svg";
import ImgY from "../../assets/icon-acc.svg";
import accE from "../../assets/accE.svg";
import accBlackA from "../../assets/accBlackA.svg";
import accBlackY from "../../assets/accBlackY.svg";
import accBlackE from "../../assets/accBlackE.svg";
import accBlackH from "../../assets/accBlackH.svg";
import cardImg from '../../assets/cardImg.png'
import cardImg2 from '../../assets/cardImg2.png'
import cardImg3 from '../../assets/cardImg3.png'
import cardImg4 from '../../assets/cardImg4.png'
import BoxBlur from '../../components/box-blur'
import BackgroundImg from '../../components/background-img'
import bgImage from '../../assets/maskBG.png';
import BoxInsights from '../../components/box-insights'
import MentionCard from "../../components/mention-card";
import ChannelsCard from "../../components/channels-card";
import ProjectCard from "../../components/project-card";
import MainTitle from "../../components/main-title";

// import cardAccG from '../../assets/accBlackG.svg'
// import cardAccH from '../../assets/icon-acc2.svg'
// import cardAccA from '../../assets/accA.svg'
// import cardAccB from '../../assets/accB.svg'
// import cardAccE from '../../assets/accE.svg'
// import cardAccY from '../../assets/icon-acc.svg'
import './style.css'

const arrayOneChannelsCard = [{
    time: '5 Min.', content: 'You have been invited to', charis: ' Charis.', icon: accA, name: 'Angelica'
}, {
    time: '27 Min.', content: 'You have been invited to', charis: ' Charis.', icon: accE, name: 'EDGAR'
},]

const arrayTwoChannelsCard = [{
    time: '5 Min.', content: 'Announcement.', icon: accBlackA, name: 'Aron H.', email: 'aron@email.com'
}, {
    time: '5 Min.',
    content: 'After completing the concept step, move to the next step.',
    icon: accBlackY,
    name: 'Yves Saint Laurent',
    email: 'yvessaint@email.com'
}, {
    time: '5 Min.',
    content: 'The ingredients will be changed as of October 25th.',
    icon: accBlackA,
    name: 'Angelica',
    email: 'angelica@email.com'
}, {
    time: '5 Min.', content: 'Package design completed.', icon: accBlackE, name: 'EDGAR', email: 'edgar@email.com'
}, {
    time: '5 Min.',
    content: 'Packaging design has been changed.',
    icon: accBlackH,
    name: 'Hubert Benjamin',
    email: 'hubert@email.com'
},]

const arrayOneProjectCard = [{
    img: cardImg, content: 'Charis 2023 Summer Kids Package', time: ' 2 days ago', percent: 25, id: 1
}, {
    img: cardImg2,
    content: 'Dr.G 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,  Christmas Production',
    time: '2 days ago',
    percent: 10,
    id: 2
}, {
    img: cardImg3, content: 'Moonshot Secret Project', time: '2 days ago', percent: 35, id: 3
}, {
    img: cardImg4, content: 'Espoir 2024 Spring Project', time: '2 days ago', percent: 85, id: 4
}, {
    img: cardImg, content: 'Charis 2023 Summer Kids Package', time: ' 2 days ago', percent: 25, id: 5
}, {
    img: cardImg2,
    content: 'Dr.G 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,  Christmas Production',
    time: '2 days ago',
    percent: 10,
    id: 6
}, {
    img: cardImg3, content: 'Moonshot Secret Project', time: '2 days ago', percent: 35, id: 7
}, {
    img: cardImg4, content: 'Espoir 2024 Spring Project', time: '2 days ago', percent: 85, id: 8
},
]

const arrayOneMentionCard = [{
    time: "5 Min.",
    firstImg: accA,
    firstName: 'Aron H.',
    secondName: 'You',
    button: 'Charis 2023 Summer Kids Package',
    id: 1
}, {
    time: "5 Min.",
    firstImg: ImgY,
    firstName: 'Yves Saint Laurent',
    secondName: 'You',
    button: 'Espoir 2024 Spring Project',
    id: 2
}, {
    time: "5 Min.", firstImg: accE, firstName: 'EDGAR', secondName: 'You', button: 'Centellian 24+ Renewal', id: 3
},]

function HomeFeed() {
    return (<div className='home-feed'>
            <BackgroundImg background={bgImage} />
            <div className='home-feed__box container'>

                <div className='home-feed__projects'>
                    <MainTitle image={flag} title='Projects'></MainTitle>
                    {arrayOneProjectCard.length <= 0 ? <BoxBlur hght='110px' text='There are no project.'/> : <div className='home-feed__flex'>
                        <div className='home-feed__wrapper'>
                            {arrayOneProjectCard.map((card) => (<ProjectCard
                                    img={card.img}
                                    content={card.content}
                                    time={card.time}
                                    percent={card.percent}
                                    key={card.id}
                                />))}
                        </div>
                    </div>}
                </div>

                <div className='home-feed__update box-channels'>
                    <MainTitle image={bell} title='Update'></MainTitle>

                    <div>
                        {arrayOneChannelsCard.map((card) => (<ChannelsCard
                                time={card.time}
                                content={card.content}
                                charis={card.charis}
                                icon={card.icon}
                                name={card.name}
                                key={card.name}
                            />))}
                    </div>
                </div>

                <div className='home-feed__mention'>
                    <MainTitle image={circleDots} title='Mention'></MainTitle>

                    {arrayOneMentionCard.length <= 0 ? <BoxBlur hght='110px' text='There are no mention.'/> : <div className='home-feed__flex'>
                        {arrayOneMentionCard.map((card) => (<MentionCard
                                firstImg={card.firstImg}
                                firstName={card.firstName}
                                time={card.time}
                                secondImg={card.secondImg}
                                secondName={card.secondName}
                                button={card.button}
                                key={card.id}
                            />))}
                    </div>}
                </div>

                <div className='home-feed__notice box-channels'>
                    <MainTitle image={microphone} title='Notice'></MainTitle>

                    <div>
                        {arrayTwoChannelsCard.map((card) => (<ChannelsCard
                                time={card.time}
                                content={card.content}
                                icon={card.icon}
                                name={card.name}
                                email={card.email}
                                key={card.name}
                            />))}
                    </div>
                </div>

                <div className='home-feed__insights box-channels'>
                    <MainTitle image={idea} title='Insights'></MainTitle>

                    <BoxInsights/>
                </div>
            </div>
        </div>);
}

export default HomeFeed;