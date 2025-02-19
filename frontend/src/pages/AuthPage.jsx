// @ts-nocheck
import { useState } from "react";
import { loginUser, registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css"; // Import CSS

const AuthPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error handling
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            if (isRegister) {
                await registerUser({ username, email, password });
                setIsRegister(false); // Switch to login after registering
            } else {
                const res = await loginUser({ email, password });
                login(res.data.token);
                navigate("/dashboard");
            }
        } catch (error) {
            setError("No account found. Please register first.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isRegister ? "Register" : "Login"}</h2>

                {error && <p className="error-message">{error}</p>}

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
                    <button type="submit" className="auth-btn">
                        {isRegister ? "Register" : "Login"}
                    </button>
                </form>

                <p>
                    {isRegister ? "Already have an account?" : "Don't have an account?"}
                    <button
                        className="toggle-btn"
                        onClick={() => setIsRegister(!isRegister)}
                    >
                        {isRegister ? "Login" : "Register"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;