import React from "react";
import logo from "../assets/bc_mailsign_seal.png";

const Header = () => {
  return (
    <div className="Header">
      <a href="https://becode.org/" alt="logo">
        <img src={logo} alt="logo"></img>
      </a>
      <h1>
        Bienvenue chez BeCode. La nouvelle formation en horaire de jour pour
        apprendre les technologies numériques. gratuitement
      </h1>
    </div>
  );
};

export default Header;
