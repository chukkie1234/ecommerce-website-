import { useNavigate } from "react-router-dom";
function Hero() { 
  const navigate = useNavigate();

return (
   <section className="hero">
     <div className="hero-content">
       <h1>Welcome to Our E-Commerce Store</h1>
    <p>
      Discover quality products and enjoy a simple and convenient
      shopping experience.
    </p>

    <button onClick={() => navigate("/cart")}>
      Shop Now
    </button>
  </div>
</section>
); }
export default Hero;