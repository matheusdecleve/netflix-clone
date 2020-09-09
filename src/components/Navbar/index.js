import React, { useEffect, useState } from "react";
import { FaSearch, FaGift, FaBell } from "react-icons/fa";

import avatar from "../../assets/avatar.png";
import logo from "../../assets/netflix-logo.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__show"}`}>
      <div className="navbar__left">
        <img src={logo} alt="Logo Netflix Clone" title="Netflix Clone" />
        <nav>
          <a href="/">Início</a>
          <a href="/">Séries</a>
          <a href="/">Filmes</a>
          <a href="/">Mais recentes</a>
          <a href="/">Minha lista</a>
        </nav>
      </div>
      <div className="navbar__right">
        <a href="/">
          <FaSearch />
        </a>
        <a href="/">
          <FaGift />
        </a>
        <a href="/">
          <FaBell />
        </a>
        <a href="/">
          <img src={avatar} alt="Foto do seu avatar" title="" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
