import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./App.css";
import Analytics from "./components/Analytics";
import Newslater from "./components/Newslater";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Analytics />
      <Newslater />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
