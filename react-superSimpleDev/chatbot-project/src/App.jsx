import { useState } from "react";
import { ChatInput } from "./components/ChatInput"; // Named Export
import "./App.css";
import ChatMessages from "./components/ChatMessages"; // Default Export

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id0",
    },
    {
      message: "Hello! How can I help you ?",
      sender: "robot",
      id: "id1",
    },
    {
      message: "can you get me todays date ?",
      sender: "user",
      id: "id2",
    },
    {
      message: "Today is September 22",
      sender: "robot",
      id: "id3",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
