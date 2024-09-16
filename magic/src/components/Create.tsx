export const NewPrompt = () => {
  return (
    <div className="create-container-0">
      <div></div>
      <div className="create-container">
        <div className="form-container">
          <h1>Template Creation</h1>
          <div className="input-row">
            <input type="text" className="title-input" placeholder="Title" />
          </div>
          <textarea className="text-area" placeholder="Template"></textarea>
          <div className="botton-container">
            <div className="edit-container">
              <button className="btn">Parameter</button>
              <button className="btn">Text Field</button>
              <button className="btn">Remove</button>
            </div>
            <button className="button-5">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
