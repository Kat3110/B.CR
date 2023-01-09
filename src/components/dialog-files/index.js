import * as React from 'react';
import './dialog__files.css';
import {ReactComponent as File} from "../../assets/File.svg";
import FileLink from "../../assets/FileLink.svg";
import image33 from "../../assets/image33.jpg";
import image34 from "../../assets/image34.jpg";
import DialogPattern from "../dialog-pattern";
import InputSearch from "../input-search";
import CardWithIcon from "../card-with-icon/card-with-icon";
import {ReactComponent as DownloadSimple} from "../../assets/DownloadSimple.svg";

const arrayCards = [
    {
        name: 'Benjamin Hubert',
        color: '#FFD702',
        image: image33,
        date: 'Aug 3, 2022 at 11:27 AM',
        link: 'science.png'
    },
    {
        name: 'EDGAR',
        color: '#00A3FF',
        image: image34,
        date: 'Aug 3, 2022 at 11:27 AM',
        link: 'science.png'
    },
    {
        name: 'Angelica',
        color: '#8F00FF',
        date: 'Aug 3, 2022 at 11:27 AM',
        link: 'Contract.docx'
    },
    {
        color: '#00E99E',
        name: 'Hubert Benjamin',
        date: 'Aug 3, 2022 at 11:27 AM',
        link: 'Passwords.xlsx'
    }
]

function DialogFiles() {

    return (
        <>
            <DialogPattern
                className='dialog__files'
                trigger={<><File /> Files</>}
                icon={<File />}
                title='Files'
                content={<>
                    <InputSearch text='Search' />
                    {arrayCards.map((card, index) => (
                        <CardWithIcon
                            content={card.content}
                            color={card.color}
                            name={card.name}
                            svg={<DownloadSimple />}
                            image={card.image}
                            date={card.date}
                            link={card.link}
                            icon={FileLink}
                            key={index}
                        />))
                    }
                </>}
                />
        </>
    );
}

export default DialogFiles;