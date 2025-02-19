// @ts-nocheck
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css"; // Import styles

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Welcome, {user ? `User ${user.userId}` : "Guest"}!</h1>
                <p>This is your dashboard. More features coming soon!</p>
            </div>
        </div>
    );
};

export default Dashboard;
