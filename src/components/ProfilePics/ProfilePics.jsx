import React from "react";
import defaultProfilePics from "../../assets/utils/defaultProfilePics.svg";

const ProfilePics = () => {
  return (
    <>
      <img
        src={defaultProfilePics}
        alt="defaultProfilePics"
        className="w-[51px] h-[51px] rounded-full bg-white"
      />
    </>
  );
};

export default ProfilePics;
