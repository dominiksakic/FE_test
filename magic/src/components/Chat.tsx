export const ChatWindow = () => {
  return (
    <div className="chat-window-container">
      <div className="chat-display">
        <div className="chat-message">User 1: Hello!</div>
        <div className="chat-message">User 2: Hi there!</div>
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
        />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};
