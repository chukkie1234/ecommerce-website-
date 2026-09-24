import { useState } from "react";

function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();

// Check that all fields are filled
if (!name || !email || !password || !confirmPassword) {
alert("Please fill in all fields.");
return;
}

// Check that passwords match
if (password !== confirmPassword) {
alert("Passwords do not match.");
return;
}

// Save user information
const user = {
name: name,
email: email,
password: password,
};

localStorage.setItem("user", JSON.stringify(user));

alert("Registration successful!");

// Clear the form
setName("");
setEmail("");
setPassword("");
setConfirmPassword("");
setShowPassword(false);
};

return (
<section className="register-section">
<div className="register-content">

<h1>Register</h1>

<p>Create your account to get started.</p>

<form
className="register-form"
onSubmit={handleSubmit}
>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

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

<input
type={showPassword ? "text" : "password"}
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
/>

<label className="show-password">
<input
type="checkbox"
checked={showPassword}
onChange={(e) => setShowPassword(e.target.checked)}
/>
Show Password
</label>

<button type="submit">
Register
</button>

</form>

</div>
</section>
);
}

export default Register;
