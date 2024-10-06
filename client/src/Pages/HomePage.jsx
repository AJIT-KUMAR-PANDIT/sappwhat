import React from "react";
import MessageBox from "../Components/MessageBox";
import Drawer from "../Components/Drawer/Drawer";
import TopBar from "../Components/TopBar";

const HomePage = () => {
  return (
    <>
      <div className=" flex">
        <div className="w-[100vw] fixed top-0 left-0 md:w-[30vw]">
          <Drawer />
        </div>
        <div className="hidden md:block">
          <div className="w-[100vw] fixed top-0 left-1/2 transform -translate-x-1/4  md:w-[calc(100vw-300px)] ">
            <TopBar />
          </div>
          <div></div>
          <div className="fixed bottom-1 left-1/2 transform -translate-x-1/4">
            <MessageBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
