import "../styles/login/FormLogin.css";
import { Button } from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <form className="login-form">
        <h1 className="login-title">Login</h1>
        <div className="middle-login">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              autoComplete="username"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="Senha"
                className="input-password"
              />
              <span
                onClick={() => setShowPassword((v) => !v)}
                style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "#aaa", cursor: "pointer", display: "flex", alignItems: "center" }}
                tabIndex={0}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                role="button"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
        <p>
          <a href="/forgot" className="link-primary">
            Esqueceu a senha?
          </a>
        </p>
      </form>
    </div>
  );
}
