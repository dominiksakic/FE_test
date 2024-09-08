import { Send } from "lucide-react";

export const ChatWindow = () => {
  return (
    <div className="chat-window-container">
      <div></div>
      <div className="chat-display">
        <div className="chat-message bot-message">
          <div className="bot-icon">🤖</div>
          <div className="bot-text">Hello! How can I help you today?</div>
        </div>
        <div className="chat-message user-message">User 1: Hi there!</div>
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
        />
        <button className="send-btn">
          <Send />
        </button>
      </div>
    </div>
  );
};
