import React from "react";
import { TextField } from "@fluentui/react";
import { Icon } from "@fluentui/react/lib/Icon";
import { History, Plus, Mic } from "lucide-react";

const IconButton = ({ icon: Icon, title }) => (
  <button
    type="button"
    className="p-2 text-gray-700 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
    title={title}
  >
    <Icon className="w-6 h-6" />
  </button>
);

const MessageBox = () => {
  return (
    <>
      <div className=" flex items-center p-2 bg-white bg-opacity-90 rounded-full shadow-md w-[98vw] md:w-[60vw]">
        <IconButton icon={History} title="View history" />
        <IconButton icon={Plus} title="Upload image" />
        <textarea
          className="flex-grow mx-2 p-2 bg-transparent text-gray-800 placeholder-gray-500 resize-none focus:outline-none"
          placeholder="Send Message..."
          rows="1"
        />
        <IconButton icon={Mic} title="Talk to Copilot" />
      </div>
    </>
  );
};

export default MessageBox;
