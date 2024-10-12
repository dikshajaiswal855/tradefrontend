import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Support from "./pages/Support";
import Calculate from "./pages/Calculate";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
