import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h3>Dashboard</h3>
                </Link>   
                <Link to="/login">
                    <h3>Log In/Sign Up</h3>
                </Link>   
            </div>
        </header>
    )
}

export default Navbar;