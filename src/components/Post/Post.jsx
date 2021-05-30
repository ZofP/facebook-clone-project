import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "../../firebase";

const removePost = (id) => {
  db.collection("posts").doc(id).delete();
};

const Post = ({ id, profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div
          style={{ color: "red" }}
          className="post__option"
          onClick={() => removePost(id)}
        >
          <DeleteIcon />
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
