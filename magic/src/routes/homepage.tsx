import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { Plus, Search } from "lucide-react";

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hideButtonOnRoutes = "/homepage/prompt";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <h2>PromptMagic</h2>
        <Link className="link" to={"prompts"}>
          <div className="icon-container">
            <Search className="icon" />
            <div>Search</div>
          </div>
        </Link>
        <Link className="link" to={"prompt"}>
          <div className="icon-container">
            <Plus className="icon" />
            <div>Create</div>
          </div>
        </Link>
        <h2>今日</h2>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <h2>過去７日間</h2>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <h2>過去３０日間</h2>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <h2>八月</h2>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
      </div>
      <div className="outlet">
        <Outlet />
        <div className="logout-button">
          <button
            className={`button-5 ${
              location.pathname === hideButtonOnRoutes ? "hidden" : ""
            }`}
          >
            Create
          </button>
          <button className="main-window-botton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
