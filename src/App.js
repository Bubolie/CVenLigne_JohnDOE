import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Up from "./components/Up";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Up />
      <Footer />
    </div>
  );
}
