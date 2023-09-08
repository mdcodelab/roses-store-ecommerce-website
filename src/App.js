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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/products" element={<AllProduct></AllProduct>}></Route>
        <Route path="product/:id" element={<ProductPage></ProductPage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
