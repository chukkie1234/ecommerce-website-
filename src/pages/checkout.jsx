import { useState } from "react";
 import { useNavigate } from "react-router-dom";

function Checkout() {
     const navigate = useNavigate();

const [name, setName] = useState(""); 
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");

const handleSubmit = (e) => {
     e.preventDefault();
alert("Order placed successfully!");

navigate("/");
};
return (
     <section className="checkout-section">
       <div className="checkout-content">
         <h1>Checkout</h1>
         
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <button type="submit">
        Place Order
      </button>
    </form>
  </div>
</section>
); }
export default Checkout;