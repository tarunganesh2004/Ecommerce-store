// @ts-nocheck
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css"; // Import styles

const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // Redirect to login page
    };

    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li>📁 Menu 1</li>
                <li>📄 Menu 2</li>
                <li>⚙️ Menu 3</li>
                <li>📊 Menu 4</li>
            </ul>
            <button className="logout-btn" onClick={handleLogout}>🚪 Sign Out</button>
        </div>
    );
};

export default Sidebar;
