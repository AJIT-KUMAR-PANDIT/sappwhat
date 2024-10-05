import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  PrimaryButton,
  Stack,
  MessageBar,
  MessageBarType,
} from "@fluentui/react";

const HomePage = () => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("/chats");
        setChats(response.data);
      } catch (err) {
        setError("Failed to load chats");
      }
    };
    fetchChats();
  }, []);

  const sendMessage = async () => {
    if (username.trim() && message.trim()) {
      try {
        await axios.post("/chats", { username, message });
        setMessage("");
        setError("");
      } catch (err) {
        setError("Failed to send message");
      }
    } else {
      setError("Username and message cannot be empty");
    }
  };

  return (
    <Stack
      tokens={{ childrenGap: 10 }}
      styles={{ root: { maxWidth: 400, margin: "0 auto" } }}
    >
      <a href="/login">Login with Google</a>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <PrimaryButton text="Send" onClick={sendMessage} />
      {error && (
        <MessageBar messageBarType={MessageBarType.error}>{error}</MessageBar>
      )}
      <Stack tokens={{ childrenGap: 5 }}>
        {chats.map((chat, index) => (
          <MessageBar key={index} messageBarType={MessageBarType.info}>
            {chat.username}: {chat.message}
          </MessageBar>
        ))}
      </Stack>
    </Stack>
  );
};

export default HomePage;
