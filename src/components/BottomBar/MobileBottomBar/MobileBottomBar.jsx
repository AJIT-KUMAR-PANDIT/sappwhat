import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import emojiIcon from "../../../assets/utils/emoji.svg";
import micIcon from "../../../assets/utils/mic.svg";
import attachementsIcon from "../../../assets/utils/attachements.svg";
import cameraIcon from "../../../assets/utils/camera.svg";
import documentsIcon from "../../../assets/utils/documents.svg";

const MobileBottomBar = () => {
  const [isEmojiCliked, setIsEmojiClicked] = useState(false);
  const [isAttachementsVisible, setAttachementsVisible] = useState(false);
  const handleClick = () => {
    setIsEmojiClicked(!isEmojiCliked);
  };
  const toggleAttachements = () => {
    setAttachementsVisible(!isAttachementsVisible);
  };
  return (
    <>
      <div className="w-[100vw] flex justify-center">
        {isEmojiCliked ? <EmojiPicker /> : null}
      </div>
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
        <img
          src={attachementsIcon}
          alt="attachementsIcon"
          className="relative right-24 "
          onClick={toggleAttachements}
        />
        {isAttachementsVisible && (
          <div className="fixed right-3 bottom-16  mt-2 p-2 bg-[azure] text-sm rounded shadow-lg">
            <div className="flex">
              <img src={documentsIcon} alt="documentsIcon" />
              <img src={documentsIcon} alt="documentsIcon" />
              <img src={documentsIcon} alt="documentsIcon" />
            </div>
            <div className="flex">
              <img src={documentsIcon} alt="documentsIcon" />
              <img src={documentsIcon} alt="documentsIcon" />
              <img src={documentsIcon} alt="documentsIcon" />
            </div>
            <div className="flex">
              <img src={documentsIcon} alt="documentsIcon" />
              <img src={documentsIcon} alt="documentsIcon" />
              <img src={documentsIcon} alt="documentsIcon" />
            </div>
          </div>
        )}
        <img src={cameraIcon} alt="cameraIcon" className="relative right-20 " />
        <img src={micIcon} alt="micIcon" />
      </div>
    </>
  );
};

export default MobileBottomBar;
