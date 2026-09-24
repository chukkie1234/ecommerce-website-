import { useEffect, useState } from "react";

function Cart() {
const [cart, setCart] = useState([]);

// Load cart from localStorage
useEffect(() => {
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
setCart(savedCart);
}, []);

// Remove product from cart
const removeFromCart = (name) => {
const updatedCart = cart.filter(
(product) => product.name !== name
);

setCart(updatedCart);
localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Increase product quantity
const increaseQuantity = (name) => {
const updatedCart = cart.map((product) =>
product.name === name
? {
...product,
quantity: product.quantity + 1,
}
: product
);

setCart(updatedCart);
localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Decrease product quantity
const decreaseQuantity = (name) => {
const updatedCart = cart
  .map((product) =>
    product.name === name
      ? {
          ...product,
          quantity: product.quantity - 1,
        }
      : product
)
.filter((product) => product.quantity > 0);

setCart(updatedCart);
localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Calculate total price
const total = cart.reduce(
(sum, product) =>
sum + Number(product.price) * product.quantity,
0
);

return (
<section className="cart-section">
<div className="cart-content">

<h1>Shopping Cart</h1>

{cart.length === 0 ? (
<p className="empty-cart">
Your cart is empty.
</p>
) : (
<>
<div className="cart-items">

{cart.map((product) => (
  <div
    className="cart-item"
    key={product.name}
>

<img
  src={product.image}
  alt={product.name}
/>

<div className="cart-item-details">

  <h3>{product.name}</h3>

  <p>
${Number(product.price).toFixed(2)}
  </p>

<div className="quantity-controls">

  <button
    onClick={() =>
      decreaseQuantity(product.name)
  }
>
  -
</button>

<span>
  {product.quantity}
</span>

<button
  onClick={() =>
    increaseQuantity(product.name)
  }
>
  +
</button>

</div>  

<button
className="remove-button"
onClick={() =>
removeFromCart(product.name)
}
>
Remove
</button>

</div>

</div>
))}

</div>

<div className="cart-summary">

<h2>
Total: ${total.toFixed(2)}
</h2>

<button
  className="checkout-button"
  onClick={() => window.location.href= "/chechout"}
>
  Checkout
</button>
</div>
</>
)}
</div>
</section>
);
}

export default Cart;
