import * as React from "react";
import Menu from "@mui/material/Menu";
import "./dropdown-mentions.css";
import { ReactComponent as Link } from "../../assets/at-s.svg";
import { ReactComponent as LinkPink } from "../../assets/at-sign-pink.svg";
import CapitalLetter from "../capital-letter";
import Checkbox from "../checkbox";
import GroupButton from "../group-button";

export default function DropdownMentions(props) {

  const arrayManager = [
    {
      name: 'Benjamin Hubert',
      checkbox: true,
      color: '#FFD702',
      id: 1
    },
    {
      name: 'EDGAR',
      checkbox: true,
      color: '#00A3FF',
      id: 2
    },
    {
      name: 'EDGAR',
      checkbox: true,
      color: '#00A3FF',
      id: 3
    },
    {
      name: 'Angelica',
      checkbox: true,
      color: '#8F00FF',
      id: 4
    },
    {
      name: 'Yves Saint Laurent',
      checkbox: true,
      color: '#8F00FF',
      id: 5
    },
    {
      name: 'Hubert Benjamin',
      checkbox: true,
      color: '#00E99E',
      id: 6
    },
    {
      name: 'Benjamin Hubert',
      checkbox: true,
      color: '#FFD702',
      id: 7
    },
    {
      name: 'EDGAR',
      checkbox: true,
      color: '#00A3FF',
      id: 8
    },
    {
      name: 'EDGAR',
      checkbox: true,
      color: '#00A3FF',
      id: 9
    },
    {
      name: 'Angelica',
      checkbox: true,
      color: '#8F00FF',
      id: 10
    },
    {
      name: 'Yves Saint Laurent',
      checkbox: true,
      color: '#8F00FF',
      id:11
    },
    {
      name: 'Hubert Benjamin',
      checkbox: true,
      color: '#00E99E',
      id: 12
    },
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropdown-mentions">
      <div
        className="dropdown-mentions__trigger"
        id={props.id}
        aria-controls={open ? props.id : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Link />
      </div>
      <Menu
        className={`dropdown-mentions__content ${props.nameClass}`}
        id={props.id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="dropdown-mentions__title">
          <LinkPink /><span>27</span> Mentions
        </div>
        <div className='dropdown-mentions__box'>
          {arrayManager.map((manager, index) => (
            <div className='dropdown-mentions__manager' key={index}>
              <div className='dropdown-mentions__manager-name'>
              <CapitalLetter letter={manager.name} bgColor={manager.color} />
                {manager.name}
              </div>
              <Checkbox />
            </div>
          ))
          }
        </div>
        <GroupButton />
      </Menu>
    </div>
  );
}
