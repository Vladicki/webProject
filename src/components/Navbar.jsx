import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {user, logout} = useAuth();
    // console.log(user)
    return (
        <header className="bg-blue-600 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-semibold hover:text-blue-200">
                    Dashboard
                </Link>
                <Link to="/resumes" className="text-white text-2xl font-semibold hover:text-blue-200">
                    My CVs
                </Link>
                <div className="flex space-x-6">
                    {
                        user?._id ? ( <button onClick={logout}>Logout</button>) : (
                            <Link to="/login" className="text-white text-lg font-medium hover:text-blue-200">
                            Log In/Sign Up
                        </Link>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;