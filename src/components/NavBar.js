import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

function NavBar() {
  //state & fxn for opening and closing hamburger
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo pulse">
          <NavLink to="/">
            <img className="rotating" src={Logo} alt="Logo" />
          </NavLink>
          <span>UHungry?®️ </span>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item pulse2">
            <NavLink exact to="/" onClick={() => setClick(false)}>
              Home
            </NavLink>
          </li>
          <li className="nav-item pulse2">
            <NavLink to="/searchrecipe" onClick={() => setClick(false)}>
              Search A Recipe
            </NavLink>
          </li>
          <li className="nav-item pulse2">
            <NavLink to="/newrecipes" onClick={() => setClick(false)}>
              Add New Recipes
            </NavLink>
          </li>
          <li className="nav-item pulse2">
            <NavLink to="/favorites" onClick={() => setClick(false)}>
              Your Favorites
            </NavLink>
          </li>
        </ul>

        {/* HAMBURGER MENU */}
        <div className="hamburger pulse" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#6ce5e8" }} />
          ) : (
            <FaBars size={20} style={{ color: "#6ce5e8" }} />
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
