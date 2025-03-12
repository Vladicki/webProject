import Dashboard from "../components/Dashboard";
import LogIn from "../components/LogIn";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const {user, logout} = useAuth();

    return (
        <div className="home">
            {
            user?._id ?  <Dashboard/> : <LogIn/>
            }
        </div>
    )
}
export default Home;