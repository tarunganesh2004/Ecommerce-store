import { useState } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

const AuthPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            if (isRegister) {
                await registerUser({ username, email, password });
                setMessage("✅ Registration Successful");
                setIsRegister(false);
            } else {
                const res = await loginUser({ email, password });
                login(res.data.token);
                navigate("/dashboard");
            }
        } catch (error) {
            setMessage("❌ There is no account with these details, please create a new one.");
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                <h2>{isRegister ? "Create an Account" : "Sign In"}</h2>
                {message && <p className="auth-message">{message}</p>}
                <form onSubmit={handleAuth}>
                    {isRegister && (
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="auth-button">
                        {isRegister ? "Register" : "Login"}
                    </button>
                </form>
                <p className="auth-link">
                    {isRegister ? "Already have an account? " : "Don't have an account? "}
                    <span onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Login" : "Register"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
