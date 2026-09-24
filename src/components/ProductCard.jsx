import { useNavigate } from "react-router-dom";
function ProductCard({ image, name, price })
 { const navigate = useNavigate();

const addToCart = () => {
   const existingCart = 
     JSON.parse(localStorage.getItem("cart")) || [];
     
const existingProduct = existingCart.find(
  (product) => product.name === name
);

let updatedCart;

if (existingProduct) {
  updatedCart = existingCart.map((product) =>
    product.name === name
      ? { ...product, quantity: product.quantity + 1 }
      : product
  );
} else {
  updatedCart = [
    ...existingCart,
    {
      image,
      name,
      price,
      quantity: 1,
    },
  ];
}

localStorage.setItem(
  "cart",
  JSON.stringify(updatedCart)
);

alert(`${name} added to cart!`);

navigate("/cart");
};
return ( <div className="product-card"> <div className="product-image"> <img src={image} alt={name} /> </div>
  <h3>{name}</h3>

  <p className="product-price">{price}</p>

  <button onClick={addToCart}>
    Add to Cart
  </button>
</div>
); }
export default ProductCard;