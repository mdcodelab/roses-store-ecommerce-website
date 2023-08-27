import Home from "./pages/Home";
import ProductList from "./pages/PopularProducts"; //viewed
import ProductPage from "./pages/ProductPage";
import PopularProducts from "./components/PopularProducts"; //viewed
import AllProduct from "./pages/AllProduct.js"
import Product from "./components/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar"
//import Announcement from "./components/Announcement";
//import Slider from "./components/Slider";
//import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<AllProduct></AllProduct>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
