import React from "react";
import myMessagesTip from "../../../assets/utils/myMessagesTip.svg";

const MyMessages = () => {
  return (
    <>
      <div className="flex">
        <div className="rounded-[9px] w-[326px] h-[66px] bg-[#e1f7ca]">
          No I will go with you as I practiced Rasengan with Jiraya sensei last
          week!
        </div>
        <div>
          <img src={myMessagesTip} alt="myMessagesTip" />
        </div>
      </div>
    </>
  );
};

export default MyMessages;
