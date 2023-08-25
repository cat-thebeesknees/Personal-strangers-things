import { Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./NavBar";
import SignUpForm from "./Register";
import Authenticate from "./Authenticate";
import { useState } from "react";




const RoutePaths = () => {
  const [token, setToken] = useState(null);
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/register" element={<SignUpForm setToken={setToken} />} />
        <Route path="/authenticate" element={<Authenticate token={token} />} />
        
      </Routes>
    </div>
  );
};


export default RoutePaths;
