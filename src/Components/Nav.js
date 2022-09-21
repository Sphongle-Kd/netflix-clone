import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  function toggleShow() {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", toggleShow);
    return () => {
      document.removeEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    // <div className={`nav ${show ?'nav_black':''}`}>
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img className="nav_avatar" src="./panda.png" alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
