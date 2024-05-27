import React from "react";
import DesktopBottomBar from "./DesktopBottomBar/DesktopBottomBar";
import MobileBottomBar from "./MobileBottomBar/MobileBottomBar";

const BottomBar = () => {
  return (
    <>
      <div className="block lg:hidden">
        <MobileBottomBar />
      </div>
      <div className="hidden md:block lg:block">
        <DesktopBottomBar />
      </div>
    </>
  );
};

export default BottomBar;
