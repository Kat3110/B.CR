import * as React from "react";
import Menu from "@mui/material/Menu";
import "./dropdown-notification.css";
import bell from "../../assets/Bell.svg";
import { ReactComponent as CloseDropdown } from "../../assets/CloseDropdown.svg";
import Badge from "@mui/material/Badge";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import NotificationMessage from "../notification-message";

export default function DropdownNotification(props) {
  const { onClick, updateList, mentionList, noticeList, getData } = props;

  const [value, setValue] = React.useState("1");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [target, setTarget] = React.useState(null);

  const [updateReadList, setUpdateReadList] = React.useState([]);
  const [updateReadCount, setUpdateReadCount] = React.useState(0);
  const [noticeReadList, setNoticeReadList] = React.useState([]);
  const [noticeReadCount, setNoticeReadCount] = React.useState(0);
  const [mentionReadList, setMentionReadList] = React.useState([]);
  const [mentionReadCount, setMentionReadCount] = React.useState(0);

  const fetchData = () => {
    setPage((prevNumber) => prevNumber + 1);
  };

  React.useEffect(() => {
    if (value === "1") {
      getData({ type: 2, page: 1, limit: page * 3 }).then((res) => {
        setUpdateReadList(res.data.data.readData.data);
        setUpdateReadCount(res.data.data.readData.count);
      });
    }
    if (value === "2") {
      getData({ type: 3, page: 1, limit: page * 3 }).then((res) => {
        setMentionReadList(res.data.data.readData.data);
        setMentionReadCount(res.data.data.readData.count);
      });
    }
    if (value === "3") {
      getData({ type: 1, page: 1, limit: page * 3 }).then((res) => {
        setNoticeReadList(res.data.data.readData.data);
        setNoticeReadCount(res.data.data.readData.count);
      });
    }
    //eslint-disable-next-line
  }, [page, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    let observer;
    setTimeout(() => {
      if (target) {
        observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
        observer.observe(target);
      }
      return () => observer && observer.disconnect();
    }, 1000);
    //eslint-disable-next-line
  }, [target]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      fetchData();
    }
  };

  const open = Boolean(anchorEl);

  const arrayTabList = [
    {
      value: "1",
      badge: updateList.unreadData.count,
      label: "Update",
    },
    {
      value: "2",
      badge: mentionList.unreadData.count,
      label: "Mention",
    },
    {
      value: "3",
      badge: noticeList.unreadData.count,
      label: "Notice",
    },
  ];

  const totalCount = arrayTabList.reduce((acc, cur) => {
    return acc + cur.badge;
  }, 0);

  return (
    <div className="dropdown-notification">
      <div
        className="dropdown-notification__trigger"
        id={props.id}
        aria-controls={open ? props.id : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge
          className="dropdown-notification__badge"
          badgeContent={totalCount}
        >
          <div className="dropdown-notification__icon">
            <img src={bell} />
          </div>
        </Badge>
      </div>
      <Menu
        className="dropdown-notification__menu"
        id={props.id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="tabs">
          <div className="dropdown-notification__top">
            <img src={bell} />
            <CloseDropdown onClick={handleClose} />
          </div>
          <TabContext value={value}>
            <div>
              <TabList className="tabs__list" onChange={handleChange}>
                {arrayTabList.map((tab) => (
                  <Tab
                    className="tabs__tab"
                    value={tab.value}
                    disableRipple
                    key={tab.value}
                    label={
                      tab.badge ? (
                        <Badge
                          className="dropdown-notification__badge"
                          badgeContent={tab.badge ? tab.badge : null}
                        >
                          <div>{tab.label}</div>
                        </Badge>
                      ) : (
                        <div>{tab.label}</div>
                      )
                    }
                  />
                ))}
              </TabList>
            </div>
            <TabPanel value="1" sx={{ p: 0 }}>
              <div className="dropdown-notification__panel">
                <div>
                  {updateList.unreadData.count > 0 ? (
                    <Badge
                      color="secondary"
                      variant="dot"
                      className="dropdown-notification__badge dropdown-notification__dot"
                    >
                      <p className="dropdown-notification__title">Unread</p>
                    </Badge>
                  ) : (
                    <p className="dropdown-notification__title">Unread</p>
                  )}

                  <div className="dropdown-notification__message">
                    {updateList.unreadData.count > 0 &&
                      updateList.unreadData.data.map((item, index) => (
                        <NotificationMessage
                          item={item}
                          onClick={(item) => {
                            onClick(item);
                            handleClose();
                          }}
                          key={index}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <p className="dropdown-notification__title">Read</p>
                  <div className="dropdown-notification__message">
                    {updateReadCount > 0 &&
                      updateReadList.map((item, index) => (
                        <NotificationMessage
                          item={item}
                          onClick={(item) => {
                            onClick(item);
                            handleClose();
                          }}
                          key={index}
                        />
                      ))}
                    {page * 3 <= updateReadCount && <div ref={setTarget}></div>}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2" sx={{ p: 0 }}>
              <div className="dropdown-notification__panel">
                <div>
                  {mentionList.unreadData.count > 0 ? (
                    <Badge
                      color="secondary"
                      variant="dot"
                      className="dropdown-notification__badge dropdown-notification__dot"
                    >
                      <p className="dropdown-notification__title">Unread</p>
                    </Badge>
                  ) : (
                    <p className="dropdown-notification__title">Unread</p>
                  )}
                  <div className="dropdown-notification__message">
                    {mentionList.unreadData.count > 0 &&
                      mentionList.unreadData.data.map((item, index) => (
                        <NotificationMessage
                          item={item}
                          onClick={(item) => {
                            onClick(item);
                            handleClose();
                          }}
                          key={index}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <p className="dropdown-notification__title">Read</p>
                  <div className="dropdown-notification__message">
                    {mentionReadCount > 0 &&
                      mentionReadList.map((item, index) => (
                        <NotificationMessage
                          item={item}
                          onClick={(item) => {
                            onClick(item);
                            handleClose();
                          }}
                          key={index}
                        />
                      ))}
                    {page * 3 <= mentionReadCount && (
                      <div ref={setTarget}></div>
                    )}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3" sx={{ p: 0 }}>
              <div className="dropdown-notification__panel">
                <div>
                  {noticeList.unreadData.count > 0 ? (
                    <Badge
                      color="secondary"
                      variant="dot"
                      className="dropdown-notification__badge dropdown-notification__dot"
                    >
                      <p className="dropdown-notification__title">Unread</p>
                    </Badge>
                  ) : (
                    <p className="dropdown-notification__title">Unread</p>
                  )}
                  <div className="dropdown-notification__message">
                    {noticeList.unreadData.count > 0 &&
                      noticeList.unreadData.data.map((item, index) => (
                        <NotificationMessage
                          item={item}
                          onClick={(item) => {
                            onClick(item);
                            handleClose();
                          }}
                          key={index}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <p className="dropdown-notification__title">Read</p>
                  <div className="dropdown-notification__message">
                    {noticeReadCount > 0 &&
                      noticeReadList.map((item, index) => (
                        <NotificationMessage
                          item={item}
                          onClick={(item) => {
                            onClick(item);
                            handleClose();
                          }}
                          key={index}
                        />
                      ))}
                    {page * 3 <= noticeReadCount && <div ref={setTarget}></div>}
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </div>
      </Menu>
    </div>
  );
}
