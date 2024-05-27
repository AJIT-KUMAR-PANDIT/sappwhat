import React from "react";
import NavTop from "../../components/NavTop/NavTop";
import MessagesSpace from "../../components/Messages/MessagesSpace/MessagesSpace";
import BottomBar from "../../components/BottomBar/BottomBar";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <NavTop />
        </div>
        <div>
          <MessagesSpace />
        </div>
        <div className="fixed bottom-0">
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default Home;
