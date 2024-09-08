export const NewPrompt = () => {
  return (
    <div className="create-container-0">
      <div className="create-container">
        <div className="form-container">
          <h1>Template Creation</h1>
          <div className="input-row">
            <input
              type="text"
              className="title-input"
              placeholder="Enter title"
            />
            <button className="btn">Add</button>
            <button className="btn">Remove</button>
          </div>
          <textarea
            className="text-area"
            placeholder="Enter text..."
          ></textarea>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};
