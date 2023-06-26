import "./notification-message.css";
import CapitalLetter from "../capital-letter";
import { diffFormater } from "utils/diffFormater";

function NotificationMessage({ onClick, item }) {
  const { creator, title, createdAt, Project } = item;

  const handleMove = () => {
    onClick(item);
  };

  return (
    <div className="notification-message" onClick={handleMove}>
      <div className="notification-message__profile">
        <CapitalLetter letter={creator.name} bgColor={creator.profileColor} />
        <p className="notification-message__name">{creator.name}</p>
      </div>
      <p className="notification-message__content">{title}</p>
      <div className="notification-message__date">
        <span>{diffFormater(createdAt)}</span>
        <p className="notification-message__text">{Project.text}</p>
      </div>
    </div>
  );
}

export default NotificationMessage;
