import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import emojiIcon from "../../../assets/utils/emoji.svg";
import micIcon from "../../../assets/utils/mic.svg";
import attachementsIcon from "../../../assets/utils/attachements.svg";
import cameraIcon from "../../../assets/utils/camera.svg";
import documentsIcon from "../../../assets/utils/documents.svg";
import cameraAttachmentIcon from "../../../assets/utils/cameraAttachment.svg";
import galleryIcon from "../../../assets/utils/gallery.svg";
import audioIcon from "../../../assets/utils/audio.svg";
import paymentsIcon from "../../../assets/utils/payments.svg";
import locationIcon from "../../../assets/utils/location.svg";
import contactIcon from "../../../assets/utils/contact.svg";
import pollsIcon from "../../../assets/utils/polls.svg";
import listIcon from "../../../assets/utils/list.svg";

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
          <div className="fixed right-3 bottom-16  mt-2 p-3 bg-[azure] text-sm rounded shadow-lg">
            <div className="flex p-3 gap-3">
              <img
                src={documentsIcon}
                alt="documentsIcon"
                className="w-[51px] h-[51px] "
              />
              <img
                src={cameraAttachmentIcon}
                alt="cameraAttachmentIcon"
                className="w-[51px] h-[51px] "
              />
              <img
                src={galleryIcon}
                alt="galleryIcon"
                className="w-[51px] h-[51px] "
              />
            </div>
            <div className="flex p-3 gap-3">
              <img
                src={audioIcon}
                alt="audioIcon"
                className="w-[51px] h-[51px] "
              />
              <img
                src={paymentsIcon}
                alt="paymentsIcon"
                className="w-[51px] h-[51px] "
              />
              <img
                src={locationIcon}
                alt="locationIcon"
                className="w-[51px] h-[51px] "
              />
            </div>
            <div className="flex p-3 gap-3">
              <img
                src={contactIcon}
                alt="contactIcon"
                className="w-[51px] h-[51px] "
              />
              <img
                src={pollsIcon}
                alt="pollsIcon"
                className="w-[51px] h-[51px] "
              />
              <img
                src={listIcon}
                alt="listIcon"
                className="w-[51px] h-[51px] "
              />
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
