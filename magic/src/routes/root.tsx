import { Form } from "../components/Form";
import xwawre from "../assets/xwaresmall.png";

const Root = () => {
  return (
    <div className="login-screen-container">
      <div className="picture-container">
        <img src={xwawre} alt="logo of xware" />
      </div>
      <Form className="login-container" />
    </div>
  );
};

export default Root;
