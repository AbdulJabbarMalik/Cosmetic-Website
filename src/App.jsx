import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Login from "./Auth/Authentication";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Authentication from "./Auth/Authentication";
import Navbar from "./main/Navbar";
import Productsdetails from "./screens/Productsdetails";
// import Cart from "./screens/Cart";
import Footer from "./main/Footer";
import Cartslider from "./main/Cartslider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" index element={<Authentication/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/productsdetails/:id" element={<Productsdetails/>} />
      {/* <Route path="/cart" element={<Cart/>} /> */}
    </Routes>
    </>
    
    
  );
}

export default App;
