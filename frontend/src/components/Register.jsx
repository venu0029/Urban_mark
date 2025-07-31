import "./register.css";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL ;
export default function Register({ setShowRegister }) {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try {
            await axios.post(`${backendUrl}/api/users/register`, newUser);
            setError(false);
            setSuccess(true);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className="container">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="input-field">
                        <input style={{ color: "#000" }} id="loginInputs" type="text" required ref={nameRef} />
                        <label style={{ color: "#333" }}>Enter your username</label>
                    </div>
                    <div className="input-field">
                        <input style={{ color: "#000" }} id="loginInputs" type="text" required ref={emailRef} />
                        <label style={{ color: "#333" }}>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input style={{ color: "#000" }} id="loginInputs" type="password" required ref={passwordRef} />
                        <label style={{ color: "#333" }}>Enter your password</label>
                    </div>
                    <button type="submit">Register</button>
                    {success && (
                        <span className="success"> Successful. You can login now</span>
                    )}
                    {error && (
                        <span className="failure"> Something went wrong!</span>
                    )}
                </form>
                <CloseIcon className="loginClose" onClick={() => setShowRegister(false)} style={{ color: "black" }} />
            </div>
        </div>
    );
}
