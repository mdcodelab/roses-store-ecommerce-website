import Home from "./pages/Home";
import ProductList from "./pages/PopularProducts"; //viewed
import ProductPage from "./pages/ProductPage";
import PopularProducts from "./components/PopularProducts"; //viewed
import AllProduct from "./pages/AllProduct.js"
import Register from "./pages/Register";
import Login from "./pages/Login";
import News from "./pages/News.js"
import Cart from "./pages/Cart";
import Error from "./pages/Error.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CartProvider } from "./cartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/products" element={<AllProduct></AllProduct>}></Route>
          <Route path="products/:id" element={<ProductPage></ProductPage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/*" element={<Error></Error>}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


