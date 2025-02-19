import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css"; // Import styles

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // Redirect to login page
    };

    return (
        <div>
            {/* ☰ Toggle Button */}
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>📁 Menu 1</li>
                    <li>📄 Menu 2</li>
                    <li>⚙️ Menu 3</li>
                    <li>📊 Menu 4</li>
                </ul>
                <button className="logout-btn" onClick={handleLogout}>🚪 Sign Out</button>
            </div>
        </div>
    );
};

export default Sidebar;
