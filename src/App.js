import Home from "./pages/Home";
import ProductList from "./pages/PopularProducts";
import ProductPage from "./pages/ProductPage";
import PopularProducts from "./components/PopularProducts";
import AllProduct from "./pages/AllProduct.js";
import Register from "./pages/Register";
import Login from "./pages/Login";
import News from "./pages/News.js";
import Cart from "./pages/Cart";
import Error from "./pages/Error.js";
import ScrollToTop from "./components/ScrollToTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cartContext";
import ProductsByCategory from "./pages/ProductsByCategory.js";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<ProductsByCategory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
