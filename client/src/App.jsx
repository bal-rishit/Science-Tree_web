
import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import CourseDetail from './pages/CourseDetail'; 
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Settings from "./pages/Settings";
import { Routes, Route, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { load } from "./redux/apiCalls";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    

    (load(dispatch));

    
  }, []);



  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Product/:id" element={<Product/>} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail/>} /> 
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> */}
        <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/Settings/:id" element={<Settings/>} />
        <Route path="/Register" element ={user ? <Navigate to="/" /> : <Register />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
