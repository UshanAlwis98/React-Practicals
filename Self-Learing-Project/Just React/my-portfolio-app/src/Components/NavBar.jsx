import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbarLinks">
        <a href="#">Home</a>
        <div className="mainLinks">
          <a href="#">Profile</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contacts</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
