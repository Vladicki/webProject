/* eslint-disable react/prop-types */
import { useState } from "react";
const LogIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(email,username,password)
    }

    return (
        <div className="LogIn">
            {isSignUp ? <SignUpForm handler={handleSubmit} setIsSignUp={setIsSignUp} setEmail={setEmail} setUsername={setUsername} setPassword={setPassword}/> 
            : <LogInForm handler={handleSubmit} setIsSignUp={setIsSignUp} setPassword={setPassword} setUsername={setUsername}/>}
        </div>
    )



}

const LogInForm = ({handler, setIsSignUp,setUsername,setPassword}) => {
    return (
        <form onSubmit={handler}>
            <h2>Log in</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" required />
            </div>
            <button type="submit">Log in</button>
            <p>New to CV Builder? <button onClick={() => { setIsSignUp(true) }}>Sign up</button></p>
        </form>
    )

}

const SignUpForm = ({handler, setIsSignUp,setEmail,setUsername,setPassword}) => {
    return (
        <form onSubmit={handler}>
            <h2>Sign up</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" required />
            </div>

            <button type="submit">Sign Up</button>
            <p>Returning user? <button onClick={() => { setIsSignUp(false) }}>Log in</button></p>
        </form>
    )

}


export default LogIn;