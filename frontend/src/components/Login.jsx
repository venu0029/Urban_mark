import "./login.css";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL ;

export default function Login({ setShowLogin, setCurrentUser, setToken, myStorage }) {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value
    };

    try {
      const res = await axios.post(`${backendUrl}/api/users/login`, user);

      myStorage.setItem("user", res.data.username);
      myStorage.setItem("token", res.data.token);
      setCurrentUser(res.data.username);
      setToken(res.data.token);
      setShowLogin(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-field">
            <input style={{ color: "#000" }} id="loginInputs" type="text" required ref={nameRef} />
            <label style={{ color: "#333" }}>Enter your username</label>
          </div>
          <div className="input-field">
            <input style={{ color: "#000" }} id="loginInputs" type="password" required ref={passwordRef} />
            <label style={{ color: "#333" }}>Enter your password</label>
          </div>
          <button type="submit">Log In</button>
          {error && (
            <span className="failure">Something went wrong!</span>
          )}
        </form>
        <CloseIcon className="loginClose" onClick={() => setShowLogin(false)} />
      </div>
    </div>
  );
}
