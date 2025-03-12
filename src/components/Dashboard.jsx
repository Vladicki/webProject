import CreateResume from "./CreateResume";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const {user, logout} = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>logged in as user: {user._id}</p>
            <CreateResume />
        </div>
    );
};

export default Dashboard;

  