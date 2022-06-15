import "./style/index.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/Create_account";
import Products from "./pages/Products";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {

  const [showLinks, setShowLinks] = useState(false);


  const styles = {
    popup: {
      display: showLinks ? "block" : "none"
    }
  };

  return (
    <>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />} />
          <Route path="/contact" element={<Contact showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />} />
          <Route path="/createaccount" element={<CreateAccount showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />} />
          <Route path="/products" element={<Products showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />} />
          <Route path="/about" element={<About showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />} />
          <Route path="/basket" element={<Basket showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />} />
          {/*Ceci est un commentaire*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
