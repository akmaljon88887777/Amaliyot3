import { FaChartLine } from "react-icons/fa";
import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/pages/Home";
import { Route, Routes } from "react-router";
import Project from "./Components/pages/Project";
import BlogDetail from "./Components/pages/BlogDetail";
import Blog from "./Components/pages/Blog";
import Contact from "./Components/pages/Contact";
import Navbars from "./Components/Navbar";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbars />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
