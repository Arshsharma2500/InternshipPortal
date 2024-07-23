import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navbarToggle = navbar.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
    let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
    
    const toggleNavbarVisibility = () => {
      isNavbarExpanded = !isNavbarExpanded;
      navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    };
    
    navbarToggle.addEventListener("click", toggleNavbarVisibility);
    
    navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    navbarMenu.addEventListener("click", toggleNavbarVisibility);

    // Cleanup event listeners on component unmount
    return () => {
      navbarToggle.removeEventListener("click", toggleNavbarVisibility);
      navbarLinksContainer.removeEventListener("click", (e) => e.stopPropagation());
      navbarMenu.removeEventListener("click", toggleNavbarVisibility);
    };
  }, []);

  return (
    <header id="navbar">
      <nav className="navbar-container container">
        <a href="/" className="home-link">
          <div className="navbar-logo"><img className='rounded-full' src={logo}></img></div>
          Website Name
        </a>
        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div id="navbar-menu" aria-labelledby="navbar-toggle">
          <ul className="navbar-links">
            <li className="navbar-item"><Link className="navbar-link font-serif" to="/">Home</Link></li>
            <li className="navbar-item"><Link className="navbar-link font-serif" to="/opportunities">Opportunities</Link></li>
            <li className="navbar-item"><Link className="navbar-link font-serif" to="/dashboard">Dashboard</Link></li>
            <li className="navbar-item"><Link className="navbar-link font-serif" to="/login">Login</Link></li>
            <li className="navbar-item"><Link className="navbar-link font-serif" to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
