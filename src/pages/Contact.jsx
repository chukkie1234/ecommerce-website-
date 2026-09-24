import { useState } from "react";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
});

const [success, setSuccess] = useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

if (!formData.name || !formData.email || !formData.message) {
alert("Please fill in all fields.");
return;
}

setSuccess("Your message has been sent successfully!");

setFormData({
name: "",
email: "",
message: "",
});
};

return (
<section className="contact-section">
<div className="contact-content">
<h1>Contact Us</h1>

<p>Get in touch with us today.</p>

<form className="contact-form" onSubmit={handleSubmit}>
<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Your Message"
rows="5"
value={formData.message}
onChange={handleChange}
></textarea>

<button type="submit">Send Message</button>
</form>

{success && (
<p className="success-message">
{success}
</p>
)}
</div>
</section>
);
}

export default Contact;
