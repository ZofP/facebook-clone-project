import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

import db from "../../firebase";

import { useStateValue } from "../../contextApi/StateProvider";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [{ user, sessionId }, dispatch] = useStateValue();

  useEffect(() => {
    const getPosts = async () => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setPosts(
            snapshot.docs
              .filter((doc) =>
                user.email
                  ? doc.data().email === user.email
                  : doc.data().sessionId === sessionId
              )
              .map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
          );
        });
    };
    getPosts();
  }, [sessionId, user]);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
