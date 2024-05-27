import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import emojiIcon from "../../../assets/utils/emoji.svg";
import micIcon from "../../../assets/utils/mic.svg";

const MobileBottomBar = () => {
  const [isEmojiCliked, setIsEmojiClicked] = useState(false);
  const handleClick = () => {
    setIsEmojiClicked(!isEmojiCliked);
  };
  return (
    <>
      <div className="flex gap-3">
        <img
          src={emojiIcon}
          alt="emojiIcon"
          onClick={handleClick}
          className="relative left-11"
        />
        <input
          placeholder="Message"
          className="w-[90vw] h-[51px] rounded-[23px] bg-[#fff] pl-11 border border-blue-500 border-solid "
        />
        <img src={micIcon} alt="micIcon" />
      </div>

      <div className="w-[100vw] flex justify-center">
        {isEmojiCliked ? <EmojiPicker /> : null}
      </div>
    </>
  );
};

export default MobileBottomBar;
