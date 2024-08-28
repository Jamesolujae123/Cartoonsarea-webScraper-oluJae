import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="mx-auto md:max-w-[890px]  px-3">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
