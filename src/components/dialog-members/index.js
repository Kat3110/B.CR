import * as React from 'react';
import './style.css';
import {ReactComponent as PaperPlaneTilt} from "../../assets/PaperPlaneTilt.svg";
import {ReactComponent as Setting} from "../../assets/setting.svg";
import ButtonChange from "../button-change";
import InputSearch from "../input-search";
import Button from "../../components/button";
import ChipMember from "../chip-member";
import CapitalLetter from "../capital-letter";
import SelectWindow from "../select-window";
import DialogPattern from "../dialog-pattern";

const arrayListMember = [
    {
        name: 'Hubert Benjamin',
        value: 1,
        color: '#00E99E'
    },
    {
        name: 'Yves Saint Laurent',
        value: 1,
        color: '#8F00FF'
    },
    {
        name: 'Angelica',
        value: 2,
        color: '#8F00FF'
    },
    {
        name: 'Hubert Benjamin',
        value: 1,
        color: '#00E99E'
    },
    {
        name: 'Yves Saint Laurent',
        value: 1,
        color: '#8F00FF'
    },
    {
        name: 'Angelica',
        value: 2,
        color: '#8F00FF'
    }
]

const arrayListPending = [
    {
        name: 'hubert@email.com',
        value: 1,
    },
    {
        name: 'kirklandnaturalmineralwater@email.com',
        value: 2,
    }
]

const arraySelect = [
    {
        value: 1,
        label: 'PM'
    },
    {
        value: 2,
        label: 'Manager'
    },
    {
        value: 3,
        label: 'Leave'
    }
]

const arrayChip = [
    { key: 0, label: 'amy@freshcompany.com' },
    { key: 1, label: 'david@freshcompany.com' },
    { key: 2, label: 'davidbowie@freshcompany.com' },
]

function DialogMembers() {

    return (
        <>
            <DialogPattern
                trigger={<ButtonChange icon={<Setting />} />}
                icon={<Setting/>}
                title='Members'
                content={
                    <>
                        <div className='dialog-members__search'>
                            <InputSearch text='Email adress' select/>
                            <Button
                                icon={<PaperPlaneTilt />}
                                size='l'
                                text='Send'
                            />
                        </div>
                        <div className='dialog-members__chips'>
                            <ChipMember array={arrayChip} />
                        </div>
                        <div className='dialog-members__list'>
                            {arrayListMember.map((member, index) => (
                                <div
                                    className='dialog-members__item'
                                    key={member.name+index}
                                >
                                    <div>
                                        <CapitalLetter bgColor={member.color} letter={member.name[0]} />
                                        {member.name}
                                    </div>
                                    <div>
                                        <SelectWindow value={member.value} array={arraySelect} />
                                    </div>
                                </div>))}
                        </div>
                        <div className='dialog-members__invitation'>
                            <h3>Invitation pending</h3>
                            <div className='dialog-members__list'>
                                {arrayListPending.map((pending, index) => (
                                    <div
                                        className='dialog-members__item'
                                        key={pending.name+index}
                                    >
                                        <div>
                                            {pending.name}
                                        </div>
                                        <div>
                                            <SelectWindow value={pending.value} array={arraySelect} />
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </>
                }
            />
        </>
    );
}

export default DialogMembers;