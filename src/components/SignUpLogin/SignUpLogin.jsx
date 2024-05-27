import React, { useState, useEffect } from "react";
import backgroundLoginSignup from "../../assets/backgroundLoginSignup.jpg";
import LoginSignupForm from "./LoginSignupForm/LoginSignupForm";

const gradients = [
  "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500",
  "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
  "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
];

const SignUpLogin = () => {
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient(
        (prevGradient) => (prevGradient + 1) % gradients.length
      );
    }, 3000); // Change gradient every 3000 milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className={`${gradients[currentGradient]} h-[100vh] w-[100vw] flex flex-col justify-center items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100`}
    >
      <div className="flex flex-col justify-center items-center bg-[#ffffff9f] w-[100vw] h-[100vh]">
        <img
          src="./sappwhat.png"
          alt="sappwhat logo"
          className="max-w-[311px]"
        />
        <div
          className="bg-[#f0f5f1] flex flex-col justify-center items-center text-[#fff] font-bold"
          style={{
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <LoginSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
