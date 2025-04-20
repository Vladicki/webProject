/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "../helpers/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useAuth();
    const navigate = useNavigate();

    // Redirect to dashboard if already logged in
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("api/users/signup", {
                name: username,
                email,
                password,
            });

            console.log("Signup Success:", response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            window.location.href = "/";  // Redirect on success
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        // "https://griffith-webproject-server-8398a1bf085d.herokuapp.com/api/users/login"
        try {
            const response = await axios.post("api/users/login", {
                email,
                password,
            });

            console.log("Login Success:", response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            window.location.href = "/";  // Redirect on success
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="bg-[url('/images_videos/background_login.jpg')] bg-[length:500px_500px] bg-no-repeat bg-right LogIn m-20">
            {isSignUp ? (
                <SignUpForm
                    handler={handleSignup} 
                    setIsSignUp={setIsSignUp} 
                    email={email} 
                    setEmail={setEmail} 
                    username={username} 
                    setUsername={setUsername} 
                    password={password} 
                    setPassword={setPassword} 
                />
            ) : (
                <LogInForm 
                    handler={handleLogin} 
                    setIsSignUp={setIsSignUp} 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                />
            )}
        </div>
    );
};

// Login Form Component
const LogInForm = ({ handler, setIsSignUp, email, setEmail, password, setPassword }) => {
    return (
        <form onSubmit={handler} className="max-w-md mx-auto p-6 bg-blue-50 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-center">Log in</h2>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
                <input
                    type="text"
                    value={email} // Bind state value
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    value={password} // Bind state value
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Log in
            </button>
            <p className="text-center text-sm text-gray-600">
                New to CV Builder?{" "}
                <button 
                    type="button" 
                    onClick={() => setIsSignUp(true)} // Fixed: Now correctly switches to Sign-Up
                    className="text-blue-500 hover:text-blue-700">
                    Sign up
                </button>
            </p>
        </form>
    );
};

// Sign-Up Form Component
const SignUpForm = ({ handler, setIsSignUp, email, setEmail, username, setUsername, password, setPassword }) => {
    return (
        <form onSubmit={handler} className="max-w-md mx-auto p-6 bg-blue-50 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign up</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <input
                    type="text"
                    value={username} // Bind state value
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    value={email} // Bind state value
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    value={password} // Bind state value
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
                Sign Up
            </button>
            <p className="mt-4 text-center text-sm">
                Returning user?{" "}
                <button
                    type="button"
                    onClick={() => setIsSignUp(false)} // Fixed: Now correctly switches to Log-In
                    className="text-blue-500 hover:underline"
                >
                    Log in
                </button>
            </p>
        </form>
    );
};

export default LogIn;
