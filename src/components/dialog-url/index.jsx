import * as React from "react";
import "./dialog__url.css";
import DialogPattern from "../dialog-pattern";
import InputSearch from "../input-search";
import CardWithIcon from "../card-with-icon/card-with-icon";
import { ReactComponent as LinkSimple } from "../../assets/LinkSimple.svg";
import { ReactComponent as Arrow } from "../../assets/ArrowSquareInPink.svg";

const arrayCards = [
  {
    name: "Benjamin Hubert",
    color: "#FFD702",
    link: "https://drive.google.com/file/d/1WcniDz5DBxybT7ePQpawxIpCbLnfrwiE/view?usp=share_link",
  },
  {
    name: "EDGAR",
    color: "#00A3FF",
    link: "https://google.com",
  },
  {
    name: "Angelica",
    color: "#8F00FF",
    link: "https://www.jetbrains.com",
  },
  {
    color: "#00E99E",
    name: "Hubert Benjamin",
    link: "https://www.google.com/search?q=ALL+QUIET+ON+THE+WESTERN+FRONT&sourceid=chrome&ie=UTF-8",
  },
];

function DialogUrl() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogPattern
        className="dialog__url"
        trigger={
          <>
            <LinkSimple /> Url
          </>
        }
        icon={<LinkSimple />}
        title="Url"
        custom="dialog__url"
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        content={
          <>
            <InputSearch text="Search" />
            {arrayCards.map((card, index) => (
              <CardWithIcon
                content={card.content}
                color={card.color}
                name={card.name}
                svg={<Arrow />}
                image={card.image}
                date={card.date}
                link={card.link}
                key={index}
              />
            ))}
          </>
        }
      />
    </>
  );
}

export default DialogUrl;
