import { Outlet, useNavigate, Link } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="main-button-container">
          <Link to={"prompts"}>
            <button className="btn"> Search</button>
          </Link>
          <Link to={"prompt"}>
            <button className="btn">Create</button>
          </Link>
        </div>
        <div className="sidebar-prompt-container">
          <h2>よく使うプロンプト</h2>
          <nav>
            <ul>
              <li>
                <Link to={"template/1"}>Email</Link>
              </li>
              <li>Estimate</li>
              <li>Why?</li>
              <li>Example</li>
              <li>More Examples</li>
              <li>
                <Link to={"prompts"}>もっと見る</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar-chat-container">
          <div className="time-container">
            <h2>今日のチャット</h2>
            <nav>
              <ul>
                <li>
                  <Link to={"chat/"}>Email</Link>
                </li>
                <li>Estimate</li>
              </ul>
            </nav>
          </div>
          <div className="time-container">
            <h2>昨日のチャット</h2>
            <nav>
              <ul>
                <li>Email</li>
                <li>Estimate</li>
              </ul>
            </nav>
          </div>
          <div className="time-container">
            <h2>今月のチャット</h2>
            <nav>
              <ul>
                <li>Email</li>
                <li>Estimate</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
