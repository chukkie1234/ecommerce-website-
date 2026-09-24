import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
const [isLoggedIn, setIsLoggedIn] = useState(
localStorage.getItem("isLoggedIn") === "true"
);

const navigate = useNavigate();

useEffect(() => {
const updateLoginStatus = () => {
setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
};

window.addEventListener("loginStatusChanged", updateLoginStatus);

return () => {
window.removeEventListener("loginStatusChanged", updateLoginStatus);
};
}, []);

const handleLogout = () => {
localStorage.removeItem("isLoggedIn");

setIsLoggedIn(false);

window.dispatchEvent(new Event("loginStatusChanged"));

navigate("/");
};

return (
<nav className="navbar">
<div className="navbar-container">

<Link to="/" className="logo">
E-Commerce
</Link>

<div className="nav-links">
<Link to="/">Home</Link>
<Link to="/about">About Us</Link>
<Link to="/services">Services</Link>
<Link to="/contact">Contact Us</Link>

{!isLoggedIn ? (
<>
<Link to="/login">Log In</Link>

<Link to="/register" className="register-btn">
Register
</Link>
</>
) : (
<button onClick={handleLogout} className="logout-btn">
Logout
</button>
)}
</div>

</div>
</nav>
);
}

export default Navbar;
