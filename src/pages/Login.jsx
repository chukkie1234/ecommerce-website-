import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();

if (!email || !password) {
alert("Please fill in all fields.");
return;
}

const registeredUser = JSON.parse(
localStorage.getItem("user")
);

if (!registeredUser) {
alert("No registered account found.");
return;
}

if (
email !== registeredUser.email ||
password !== registeredUser.password
) {
alert("Invalid email or password.");
return;
}

alert("Password is correct. Login successful!");

localStorage.setItem("isLoggedIn", "true");

window.dispatchEvent(new Event("loginStatusChanged"));

setEmail("");
setPassword("");
setShowPassword(false);

navigate("/");
};

return (
<section className="login-section">
<div className="login-content">
<h1>Login</h1>

<p>Welcome back! Please login to your account.</p>

<form
className="login-form"
onSubmit={handleSubmit}
>
<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<input
type={showPassword ? "text" : "password"}
placeholder="Your Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<label className="show-password">
<input
type="checkbox"
checked={showPassword}
onChange={(e) =>
setShowPassword(e.target.checked)
}
/>
Show Password
</label>

<button type="submit">
Login
</button>
</form>
</div>
</section>
);
}

export default Login;
