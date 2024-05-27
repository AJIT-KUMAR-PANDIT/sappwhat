import React from "react";
import backArrow from "../../../assets/utils/backArrow.svg";
import ProfilePics from "../../ProfilePics/ProfilePics";

const MobileNavTop = () => {
  return (
    <>
      <div className="w-[100vw] h-[61px] bg-[#377e6a] flex gap-3 items-center">
        &nbsp;&nbsp;&nbsp;
        <img src={backArrow} alt="backArrow" className="size-[21px]" />
        <ProfilePics />
        <span className="text-[#ffff] font-bold text-xl">MobileNavTop</span>
      </div>
    </>
  );
};

export default MobileNavTop;
