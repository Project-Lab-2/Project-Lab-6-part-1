import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Jet Piranha</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <aside className="sidebar">
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
          <li><a href="index.html">Pants</a></li>
          <li><a href="index.html">Shirts</a></li>
        </ul>
      </aside>

      <main>
        <div className="content">
        <ul className="products">
  <li className="product">
    <div className="product">
      <img className="product-image" src="images/d1.jpg" alt="product 1" />
      <div className="product-name">
        <a href="product.html">Slim Shirt</a>
      </div>
      <div className="product-brand">Nike</div>
      <div className="product-price">$60</div>
      <div className="product-rating">4.5 Stars (10 Reviews)</div>
    </div>
  </li>

  <li className="product">
    <div className="product">
      <img className="product-image" src="images/d1.jpg" alt="product 2" />
      <div className="product-name">
        <a href="product.html">Slim Shirt</a>
      </div>
      <div className="product-brand">Nike</div>
      <div className="product-price">$60</div>
      <div className="product-rating">4.5 Stars (10 Reviews)</div>
    </div>
  </li>

  <li className="product">
    <div className="product">
      <img className="product-image" src="images/d1.jpg" alt="product 3" />
      <div className="product-name">
        <a href="product.html">Slim Shirt</a>
      </div>
      <div className="product-brand">Nike</div>
      <div className="product-price">$60</div>
      <div className="product-rating">4.5 Stars (10 Reviews)</div>
    </div>
  </li>

  <li className="product">
    <div className="product">
      <img className="product-image" src="images/d1.jpg" alt="product 4" />
      <div className="product-name">
        <a href="product.html">Slim Shirt</a>
      </div>
      <div className="product-brand">Nike</div>
      <div className="product-price">$60</div>
      <div className="product-rating">4.5 Stars (10 Reviews)</div>
    </div>
  </li>

  <li className="product">
    <div className="product">
      <img className="product-image" src="images/d1.jpg" alt="product 5" />
      <div className="product-name">
        <a href="product.html">Slim Shirt</a>
      </div>
      <div className="product-brand">Nike</div>
      <div className="product-price">$60</div>
      <div className="product-rating">4.5 Stars (10 Reviews)</div>
    </div>
  </li>
</ul>

        </div>
      </main>

      <footer>
        &copy; 2022 Jet Piranha
      </footer>
    </div>
  );
}

export default App;
