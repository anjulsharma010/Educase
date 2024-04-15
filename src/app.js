import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Nopage from "./components/Nopage";

const AppLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login/account" element={<Account />} />
        <Route path="signup/account" element={<Account />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
