// @ts-nocheck
import { useContext } from "react";
import { AuthContext } from "../content/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <span>Welcome, {user.userId}!</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;