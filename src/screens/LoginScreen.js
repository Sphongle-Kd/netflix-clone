import React from "react";
import { login } from "./utils";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const disableButton = !email || password.length < 6 || loading;

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await login({ email: email, password: password });
      setLoading(false);
      alert("login succesful");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="warraper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id={"email"}
          type={"email"}
          value={email}
        />
      </div>
      <div className="row">
        <label htmlFor={"password"}>password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id={"password"}
          type={"password"}
          value={password}
        />
      </div>
      <div className="errorMessage">{error}</div>
      <div className="button">
        <button disabled={disableButton} onClick={handleLogin}>
          login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
