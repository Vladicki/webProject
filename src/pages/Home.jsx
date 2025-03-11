import Dashboard from "../components/Dashboard";
import LogIn from "../components/LogIn";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const userAuth = useAuth();

    return (
        <div className="home">
            {
            userAuth.isLoggedIn ?  <Dashboard/> : <LogIn/>
            }
        </div>
    )
}
export default Home;