import xware from "../assets/xware.png";

export const Search = () => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <img src={xware} alt="xware logo" />
        <input type="text" />
        <div>
          <button>Chats</button>
          <button>Templates</button>
        </div>
      </div>
      <div className="result-container"></div>
    </div>
  );
};
