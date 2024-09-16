import xware from "../assets/logo2.png";

export const Search = () => {
  return (
    <div className="search-container">
      <div></div>
      <div className="search-input-container">
        <div className="image-container">
          <img src={xware} alt="xware logo" />
        </div>
        <input type="text" placeholder="Search Templates" />
        <div>
          <button>My Templates</button>
          <button>All Templates</button>
          <button>Previous Chats</button>
        </div>
      </div>
      <div className="result-container"></div>
    </div>
  );
};
