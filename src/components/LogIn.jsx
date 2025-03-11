
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const LogIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                    setUsername={setUsername} 
                />
            )}
        </div>
    );
};

// Login Form Component
const LogInForm = ({ handler, setIsSignUp, setEmail, setPassword }) => {
    return (
        <form onSubmit={handler}>
            <h2>Log in</h2>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" required />
            </div>
            <button type="submit">Log in</button>
            <p>New to CV Builder? <button type="button" onClick={() => setIsSignUp(true)}>Sign up</button></p>
        </form>
    );
};

// Sign-Up Form Component
const SignUpForm = ({ handler, setIsSignUp, setEmail, setUsername, setPassword }) => {
    return (
        <form onSubmit={handler}>
            <h2>Sign up</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" required />
            </div>
            <button type="submit">Sign Up</button>
            <p>Returning user? <button type="button" onClick={() => setIsSignUp(false)}>Log in</button></p>
        </form>
    );
};

export default LogIn;
