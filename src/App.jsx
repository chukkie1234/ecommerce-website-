import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BookNow from "./pages/BookNow"; 
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/checkout"; 
import Cart from "./pages/Cart";

function App() { 
  return ( 
     <BrowserRouter>
      <Navbar />
      
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/book-now" element={<BookNow />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>

  <Footer />
</BrowserRouter>
); }
export default App;