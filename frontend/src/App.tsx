import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <Router>
      <div className="grid-container">
        <link rel="stylesheet" href="style.css" />
        <title>Jet Piranha</title>
        <div>

          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <a href="index.html">Jet Piranha</a>
            </div>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/Orders">Orders</Link>
            </div>
          </header>
          <aside className="sidebar">
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
              <li><a href="index.html">Pants</a></li>
              <li><a href="index.html">Shirts</a></li>
            </ul>
          </aside>

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Products />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/order/:id" element={<OrderDetail />} />
            </Routes>
          </main>


          <footer>
            &copy; 2022 Jet Piranha
          </footer>


        </div>
      </div >
    </Router >
  );
}

export default App;
