import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

import { useStateValue } from "../../contextApi/StateProvider";

import { auth } from "../../firebase";
import { actionTypes } from "../../contextApi/reducer";

const SidebarRow = ({ src, Icon, title, iconStyle }) => {
  const [state, dispatch] = useStateValue();
  const signOut = () => {
    console.log("clicked");
    auth
      .signOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((e) => {
        console.error("Sign Out Error", e);
      });
    dispatch({ type: actionTypes.SET_USER, payload: null });
  };
  return (
    <div
      className="sidebarRow"
      style={{ color: iconStyle }}
      onClick={title === "Sign Out" ? signOut : () => {}}
    >
      {(src === "" || src) && <Avatar src={src} />}
      {Icon && <Icon style={{ color: iconStyle }} />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
