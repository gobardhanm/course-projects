import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import "./App.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText(""); //controled input
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to ChatBot"
        size="30"
        id="input-field"
        onChange={saveInputText}
        value={inputText} //controlled input
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

function ChatMsg({ message, sender }) {
  return (
    <>
      <div
        className={
          sender === "user" ? "chat-message-user" : "chat-message-robot"
        }
      >
        {sender === "robot" && (
          <img src="robot.png" alt="" className="chat-message-profile" />
        )}
        <div className="chat-message-text">{message}</div>
        {sender === "user" && (
          <img src="user.png" alt="" className="chat-message-profile" />
        )}
      </div>
    </>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMsg
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

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
