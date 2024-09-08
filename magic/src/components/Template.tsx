export const Template = () => {
  return (
    <div className="template-container">
      <div></div>
      <div className="template-input-container">
        <h2>Template Title</h2>
        <div className="grid-template-container">
          <div>
            Here Comes the Template!
            <br />
            Write a message to $[Target]
            <br />
            You are a $[Role]
            <br />
            $[Text that you want to write him]
          </div>
          <div className="input-fields">
            <input type="text" placeholder="Target" className="input-field" />
            <input
              type="text"
              placeholder="Enter your role"
              className="input-field"
            />
            <textarea
              placeholder="Enter the text you want to write"
              className="input-field"
            />
          </div>
        </div>
        <button className="send-btn">Send</button>
        <button className="edit-btn">Edit</button>
      </div>
    </div>
  );
};
