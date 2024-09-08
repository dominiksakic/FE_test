import { Form } from "../components/Form";
import logo1 from "../assets/logo1.png";

const Root = () => {
  return (
    <div className="login-screen-container">
      <div className="picture-container">
        <img src={logo1} alt="logo of xware" />
      </div>
      <Form className="login-container" />
    </div>
  );
};

export default Root;
