import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/236x/9f/cf/73/9fcf731a55a70aa6cfe52aed293943d6.jpg"
        profileSrc="https://i.pravatar.cc/150?img=57"
        title="Mount Everest"
      />
      <Story
        image="https://i.pinimg.com/236x/ac/08/33/ac0833e3a3ad05c50aa48a54123be607.jpg"
        profileSrc="https://i.pravatar.cc/150?img=55"
        title="Zeus Almighty"
      />
      <Story
        image="https://i.pinimg.com/236x/80/91/f9/8091f9dceb2ea55fa7b57bb7295e1824.jpg"
        profileSrc="https://i.pravatar.cc/150?img=46"
        title="Best Person"
      />
      <Story
        image="https://i.pinimg.com/236x/17/fb/a7/17fba7eedcc069e1843e0b730f27c4d6.jpg"
        profileSrc="https://i.pravatar.cc/150?img=21"
        title="Human Saint"
      />
      <Story
        image="https://i.pinimg.com/236x/5d/f5/df/5df5dfa813d97a3844f446cdff7bafb5.jpg"
        profileSrc="https://i.pravatar.cc/150?img=2"
        title="Walking Kindness"
      />
    </div>
  );
};

export default StoryReel;
