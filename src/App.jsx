import { useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import Approuting from "./RoutingComponents/Approuting";
import Footer from "./Components/Footer/Footer";
import Navbar1 from "./Components/Navbar/Navbar1";
import Navbar3 from "./Components/Navbar/Navbar3";
import Navbar2 from "./Components/Navbar/Navbar2";
const DynamicNavBar = () => {
  let getCurrentLocation = useLocation();
  if (getCurrentLocation.pathname === "/videochat") {
    return <Navbar2 />;
  } else if (getCurrentLocation.pathname === "/audiochat") {
    return;
  } else if (getCurrentLocation.pathname === "/dashboard") {
    return <Navbar3 />;
  } else return <Navbar1 />;
};
const DynamicFooter = () => {
  let getCurrentLocation = useLocation();
  if (
    getCurrentLocation.pathname === "/audiochat" ||
    getCurrentLocation.pathname === "/videochat"
  ) {
    return;
  } else return <Footer />;
};
function App() {
  return (
    <BrowserRouter>
      <DynamicNavBar />
      <Approuting />
      <DynamicFooter />
    </BrowserRouter>
  );
}

export default App;
