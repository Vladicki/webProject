import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {user, logout} = useAuth();
    // console.log(user)
    return (
        <header className="relative h-[100px] w-full overflow-hidden shadow-md">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/images_videos/background_navbar.mp4" type="video/mp4" />
            </video>

            <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6 z-10">
                <Link to="/" className="text-white text-2xl font-semibold hover:text-blue-200">
                    Dashboard
                </Link>
                <Link to="/resumes" className="text-white text-2xl font-semibold hover:text-blue-200">
                    My CVs
                </Link>
                <div className="flex space-x-6">
                    {
                        user?._id ? ( <button onClick={logout} className="text-white text-lg hover:text-blue-200">Logout</button>) : (
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