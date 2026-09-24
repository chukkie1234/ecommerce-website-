import Hero from "../components/Hero";
 import ProductCard from "../components/ProductCard";
 import Services from "../components/Services";
 
 
import Product1 from "../assets/images/Product1.jpg";
 import Product2 from "../assets/images/Product2.jpg";
  import Product3 from "../assets/images/Product3.jpg";
function Home() {
     return (
         <>
          <Hero />

  <section className="products-section">
    <h2>Featured Products</h2>

    <div className="products-grid">

      <ProductCard
        image={Product1}
        name="Watch"
        price="49.99"
      />

      <ProductCard
        image={Product2}
        name="Headphones"
        price="59.99"
      />

      <ProductCard
        image={Product3}
        name="Sneakers"
        price="69.99"
      />

    </div>
  </section>

  <Services />
</>
); }
export default Home;