// import React from 'react'
// import {useState} from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {

//     const [menuOpen, setMenuOpen] = React.useState(false)

//     const NavLinks =[
//         {name}
//     ]
//   return (
//     <>

//     </>
//   )
// }

// 
import { Link } from "react-router-dom";
import {
  Apple,
  Search,
  ShoppingBag,
} from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const navLinks = [
    { name: "Store", path: "/store" },
    { name: "Mac", path: "/mac" },
    { name: "iPad", path: "/ipad" },
    { name: "iPhone", path: "/iphone" },
    { name: "Watch", path: "/watch" },
    { name: "Vision", path: "/vision" },
    { name: "AirPods", path: "/airpods" },
    { name: "TV & Home", path: "/tvhome" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Accessories", path: "/accessories" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link
          to="/"
          className="nav-logo"
          aria-label="Apple Home"
        >
          <Apple size={20} fill="currentColor" />
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-icons">
          <button type="button" aria-label="Search">
            <Search size={18} />
          </button>

          <button type="button" aria-label="Shopping Bag">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;