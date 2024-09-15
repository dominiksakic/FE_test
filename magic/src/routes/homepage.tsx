import { Outlet, useNavigate, Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";

const Homepage = () => {
  const navigate = useNavigate();

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
        <h2>昨日</h2>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <Link className="link" to={"chat/"}>
          <div>Email</div>
        </Link>
        <h2>先週</h2>
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
        <button className="button-5 logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
