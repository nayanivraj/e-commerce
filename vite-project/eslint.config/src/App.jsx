import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./Login";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail"; 
import './App.css';
import Productlist from "./Productlist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />\
          <Route path="/productlist" element={<Productlist />} />\
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
