import React, { useState } from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Avatar, IconButton } from "@material-ui/core";

import { useStateValue } from "../../contextApi/StateProvider";

const iconsArray = [
  HomeIcon,
  FlagIcon,
  SubscriptionsOutlinedIcon,
  StorefrontOutlinedIcon,
  SupervisedUserCircleIcon,
];

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  const [activeIcon, setActiveIcon] = useState(iconsArray[0]);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        {iconsArray.map((Icon) => (
          <div
            className={`header__option ${
              activeIcon === Icon && "header__option--active"
            }`}
            onClick={() => setActiveIcon(Icon)}
          >
            <Icon fontSize="large" />
          </div>
        ))}
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
