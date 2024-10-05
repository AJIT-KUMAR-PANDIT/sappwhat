import React from "react";
import MessageBox from "../Components/MessageBox";
import Drawer from "../Components/Drawer/Drawer";

const HomePage = () => {
  return (
    <>
      <div className=" flex">
        <div>
          <Drawer />
        </div>
        <div>
          <div></div>
          <div></div>
          <div>
            <MessageBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
