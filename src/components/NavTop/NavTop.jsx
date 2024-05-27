import React from "react";
import MobileNavTop from "./MobileNavTop/MobileNavTop";
import DesktopNavTop from "./DesktopNavTop/DesktopNavTop";

const NavTop = () => {
  return (
    <>
      <div className="lg:hidden">
        <MobileNavTop />
      </div>
      <div className="hidden md:block lg:block">
        <DesktopNavTop />
      </div>
    </>
  );
};

export default NavTop;
