import React from "react";
import myMessagesTip from "../../../assets/utils/myMessagesTip.svg";

const MyMessages = () => {
  return (
    <>
      <div className="flex">
        <div className="rounded-[9px] w-[326px] h-[66px] bg-[#e1f7ca]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </div>
        <div>
          <img src={myMessagesTip} alt="myMessagesTip" />
        </div>
      </div>
    </>
  );
};

export default MyMessages;
