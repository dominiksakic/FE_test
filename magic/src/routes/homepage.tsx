import { Outlet } from "../layout/outlet";
import { Sidebar } from "../layout/sidebar";

const Homepage = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Homepage;
