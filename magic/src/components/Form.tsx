import { useNavigate } from "react-router-dom";

export const Form = ({ className }: { className: string }) => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/homepage");
  };

  return (
    <div className={className}>
      <div className="login-form-center-container">
        <h1>Login into Xware</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>LogIn</button>
      </div>
    </div>
  );
};
