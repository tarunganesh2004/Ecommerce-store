// @ts-nocheck
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css"; // Import styles

const Dashboard = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsername(decoded.username || "Guest");
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, []);

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Welcome, {username}! 👋</h1>
                <p>This is your dashboard. More features coming soon!</p>
            </div>
        </div>
    );
};

export default Dashboard;
