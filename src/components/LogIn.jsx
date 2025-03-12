
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {user, logout} = useAuth()




    // Function to handle sign-up
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(email, username, password);
        try {
            const response = await axios.post("http://localhost:4000/api/users/signup", {
                name: username,
                email,
                password
            });

            console.log("Signup Success:", response.data);
            window.location.href = "/";  // Redirect on success
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
        }
    };

    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const response = await axios.post("http://localhost:4000/api/users/login", {
                email,
                password
            });

            console.log("Login Success:", response.data);
            localStorage.setItem("token", response.data.token); // Save token for authentication
            window.location.href = "/";  // Redirect on success
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="LogIn">
            {isSignUp ? (
                <SignUpForm 
                    handler={handleSignup} 
                    setIsSignUp={setIsSignUp} 
                    setEmail={setEmail} 
                    setUsername={setUsername} 
                    setPassword={setPassword} 
                />
            ) : (
                <LogInForm 
                    handler={handleLogin}  // Fixed: changed from handleSubmit to handleLogin
                    setIsSignUp={setIsSignUp} 
                    setPassword={setPassword} 
                    setEmail={setEmail} 
                />
            )}
        </div>
    );
};

// Login Form Component
const LogInForm = ({ handler, setIsSignUp, setEmail, setPassword }) => {
    return (
        <form onSubmit={handler} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-center">Log in</h2>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Log in
            </button>
            <p className="text-center text-sm text-gray-600">
                New to CV Builder? 
                <button 
                    type="button" 
                    onClick={() => setIsSignUp(false)} 
                    className="text-blue-500 hover:text-blue-700 focus:outline-none">
                    Sign up
                </button>
            </p>
        </form>
    );
};


// Sign-Up Form Component
const SignUpForm = ({ handler, setIsSignUp, setEmail, setUsername, setPassword }) => {
    return (
        <form onSubmit={handler} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign up</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Sign Up
            </button>
            <p className="mt-4 text-center text-sm">
                Returning user?{' '}
                <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    className="text-blue-500 hover:underline"
                >
                    Log in
                </button>
            </p>
        </form>
    );
};


export default LogIn;
