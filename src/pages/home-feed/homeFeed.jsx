import * as React from "react";
import flag from "assets/Flag.svg";
import circleDots from "assets/ChatCircleDots.svg";
import bell from "assets/Bell.svg";
import microphone from "assets/microphone.svg";
import idea from "assets/IdeaI.svg";
import BoxBlur from "components/box-blur";
import BackgroundImg from "components/background-img";
import bgImage from "assets/maskBG.png";
import BgMobile from "assets/bcg2Mob.png";
import MentionCard from "components/mention-card";
import ChannelsCard from "components/channels-card";
import ProjectCard from "components/project-card";
import MainTitle from "components/main-title";
import "./home-feed.css";
import { ReactComponent as ArrowUUpLeft } from "assets/ArrowUUpLeft.svg";
import { ReactComponent as ArrowElbowLeft } from "assets/ArrowElbowLeft.svg";
import { ReactComponent as TrendUp } from "assets/TrendUp.svg";
import { ReactComponent as TrendDown } from "assets/TrendDown.svg";
import InsightsCard from "components/insights-card";
import Header from "layout/header";
import { SelectImg } from "utils/selectImg";
import { diffFormater } from "utils/diffFormater";
import { useNavigate } from "react-router-dom";

const arrayInsightsCard = [
  {
    iconArrow: ArrowUUpLeft,
    text: "Fastest response time",
    content: "Moonshot Secret Project",
    number: "17",
    time: "Minutes",
    color: "#00E99E",
    name: "Aron H.",
  },
  {
    iconArrow: ArrowElbowLeft,
    text: "Slowest response time",
    content: "Dr.G 2022, 2023 Christmas",
    number: "35",
    time: "Minutes",
    color: "#8F00FF",
    name: "Yves Saint Laurent",
  },
  {
    iconArrow: TrendUp,
    text: "Largest data amount",
    content: "Centellian 24+ Renewal",
    number: "5",
    time: "Minutes",
    color: "#FFD702",
    name: "Angelica",
  },
  {
    iconArrow: TrendDown,
    text: "Smallest data amount",
    content: "Espoir 2024 Spring Project",
    number: "42",
    time: "Minutes",
    color: "#00A3FF",
    name: "EDGAR",
  },
  {
    iconArrow: TrendUp,
    text: "Largest data amount",
    content: "Charis 2023 Summer Kids Package",
    number: "12",
    time: "Minutes",
    color: "#00E99E",
    name: "Hubert Benjamin",
  },
];

export function HomeFeed({ divRef, projectData, notificationData, onClick }) {
  const { updateData, mentionData, noticeData } = notificationData;
  const navigate = useNavigate();
  return (
    <>
      <Header join titlePage={"Home Feed"} />
      <div className="home-feed">
        <BackgroundImg background={bgImage} backgroundMobile={BgMobile} />
        <div className="home-feed__box container">
          <div className="home-feed__projects">
            <MainTitle image={flag} title="Projects"></MainTitle>
            {projectData.length <= 0 ? (
              <BoxBlur hght="110px" text="There are no project." />
            ) : (
              <div className="home-feed__flex">
                <div ref={divRef} className="home-feed__wrapper">
                  {projectData.map((item) => (
                    <ProjectCard
                      accounts={item.account}
                      img={SelectImg(item.projectImage)}
                      content={item.name}
                      time={diffFormater(item.updatedAt)}
                      percent={item.percent}
                      onClick={() =>
                        navigate(`/projects/${item.id}/undefined/undefined`)
                      }
                      key={item.id}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="home-feed__update box-channels">
            <MainTitle image={bell} title="Update"></MainTitle>

            {updateData.length <= 0 ? (
              <BoxBlur hght="110px" text="There are no update." />
            ) : (
              <div>
                {updateData.map((item) => (
                  <ChannelsCard
                    item={item}
                    onClick={onClick}
                    color={item.user.profileColor}
                    time={diffFormater(item.createdAt)}
                    content={"You have been invited to "}
                    charis={`${item.Project.name}.`}
                    name={item.user.name}
                    key={item.id}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="home-feed__mention">
            <MainTitle image={circleDots} title="Mention"></MainTitle>

            {mentionData.length <= 0 ? (
              <BoxBlur hght="110px" text="There are no mention." />
            ) : (
              <div className="home-feed__flex">
                {mentionData.map((item) => (
                  <MentionCard
                    item={item}
                    onClick={onClick}
                    color={item.user.profileColor}
                    firstName={item.user.name}
                    time={diffFormater(item.createdAt)}
                    secondName={item.creator.name}
                    colorTwo={item.creator.profileColor}
                    button={item.Project.name}
                    key={item.id}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="home-feed__notice box-channels">
            <MainTitle image={microphone} title="Notice"></MainTitle>

            {noticeData.length <= 0 ? (
              <BoxBlur hght="110px" text="There are no notice." />
            ) : (
              <div>
                {noticeData.map((item) => (
                  <ChannelsCard
                    onClick={onClick}
                    item={item}
                    time={diffFormater(item.createdAt)}
                    content={item.title}
                    name={item.creator.name}
                    key={item.id}
                    color={item.creator.profileColor}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="home-feed__insights box-channels">
            <MainTitle image={idea} title="Insights"></MainTitle>

            <div className="home-feed__insights">
              {arrayInsightsCard.map((card) => (
                <InsightsCard
                  iconArrow={<card.iconArrow />}
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
      </div>
    </>
  );
}
