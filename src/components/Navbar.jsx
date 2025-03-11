import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-semibold hover:text-blue-200">
                    Dashboard
                </Link>
                <div className="flex space-x-6">
                    <Link to="/login" className="text-white text-lg font-medium hover:text-blue-200">
                        Log In/Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;