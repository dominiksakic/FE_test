import { useNavigate } from "react-router-dom";

export const Form = ({ className }: { className: string }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/homepage");
  };

  return (
    <div className={className}>
      <div className="login-form-center-container">
        <h1>- Login into Dominik -</h1>
        <input className="input-5" type="email" placeholder="Email" />
        <input className="input-5" type="password" placeholder="Password" />
        <button className="button-5" onClick={handleLogin}>
          LogIn
        </button>
      </div>
    </div>
  );
};
