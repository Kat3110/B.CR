import * as React from 'react';
import BoxBlur from '../../components/box-blur/index'
import BoxInsights from '../../components/box-insights/index'
import flag from '../../assets/Flag.svg'
import circleDots from '../../assets/ChatCircleDots.svg'
import bell from '../../assets/Bell.svg'
import microphone from '../../assets/microphone.svg'
import idea from '../../assets/IdeaI.svg'
import './style.css'
import ChannelsCard from "../../components/channels-card";
import accA from "../../assets/accA.svg";
import accE from "../../assets/accE.svg";
import accBlackA from "../../assets/accBlackA.svg";
import accBlackY from "../../assets/accBlackY.svg";
import accBlackE from "../../assets/accBlackE.svg";
import accBlackH from "../../assets/accBlackH.svg";


const arrayOne = [
    {
        time: '5 Min.',
        content: 'You have been invited to',
        charis: ' Charis.',
        icon: accA,
        name: 'Angelica'
    },
    {
        time: '27 Min.',
        content: 'You have been invited to',
        charis: ' Charis.',
        icon: accE,
        name: 'EDGAR'
    },
]

const arrayTwo = [
    {
        time: '5 Min.',
        content: 'Announcement.',
        icon: accBlackA,
        name: 'Aron H.'
    },
    {
        time: '5 Min.',
        content: 'After completing the concept step, move to the next step.',
        icon: accBlackY,
        name: 'Yves Saint Laurent'
    },
    {
        time: '5 Min.',
        content: 'The ingredients will be changed as of October 25th.',
        icon: accBlackA,
        name: 'Angelica'
    },
    {
        time: '5 Min.',
        content: 'Package design completed.',
        icon: accBlackE,
        name: 'EDGAR'
    },
    {
        time: '5 Min.',
        content: 'Packaging design has been changed.',
        icon: accBlackH,
        name: 'Hubert Benjamin'
    },
]


function HomeFead(props) {
    return (
        <div className='home-fead'>
            <div className='home-fead__box container'>
                <BoxBlur imag={flag} title='Projects'/>
                <div className='box-channels'>
                    <h2 className='box__title'>
                        <img src={bell}/>
                        Update
                    </h2>
                    {arrayOne.map((card) => (
                        <ChannelsCard time={card.time}
                                      content={card.content}
                                      charis={card.charis}
                                      icon={card.icon}
                                      name={card.name}
                                      key={card.name}
                        />
                    ))}
                </div>
                <BoxBlur imag={circleDots} title='Mention'/>
                <div className='box-channels'>
                    <h2 className='box__title'>
                        <img src={microphone}/>
                        Notice
                    </h2>
                    {arrayTwo.map((card) => (
                        <ChannelsCard time={card.time}
                                      content={card.content}
                                      icon={card.icon}
                                      name={card.name}
                                      key={card.name}
                        />
                    ))}
                </div>
                <BoxInsights imag={idea} title='Insights'
                />
            </div>

        </div>
    );
}

export default HomeFead;