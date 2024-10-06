import React, { useState } from "react";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100/50 backdrop-filter backdrop-blur-md w-full fixed top-0 z-50 md:w-[70vw]">
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-500 hover:text-gray-900 transition duration-300"
          onClick={handleActive}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
        </button>
        <h1 className="text-lg font-bold text-gray-900">Chat App</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          className="py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
        />
        <button className="text-gray-500 hover:text-gray-900 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
