import React from "react";
import logo from "../../Assets/home-delivery.png";

const Header = () => {
  return (
    <div className="header">
        <img
          className="logo"
          src={logo}
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  );
};

export default Header;