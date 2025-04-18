import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar/Navbar1";
import Navbar2 from "./Components/Navbar/Navbar2";
import Navbar3 from "./Components/Navbar/Navbar3";
function NavRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar1 />} />
        <Route path="/audiochat" element={<Navbar2 />} />
        <Route path="/videochat" element={<Navbar2 />} />
        <Route path="/dashboard" element={<Navbar3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavRouting;
