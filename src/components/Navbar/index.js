import React, { useEffect, useState } from "react";
import { FaSearch, FaGift, FaBell } from "react-icons/fa";

import avatar from "../../assets/avatar.png";
import logo from "../../assets/netflix-logo.png";

import axios from "../../axios";
import requests from "../../requests";

function Navbar() {
  const [show, handleShow] = useState(false);
  const [search, setSearch] = useState("");
  const [wantSearch, setWantSearch] = useState(false);
  const [results, setResults] = useState([]);

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

  const handleSearch = async (e) => {
    e.preventDefault();

    const request = await axios.get(`${requests.fetchSearch}query=${search}`);
    setResults(request.data.results);
    setSearch("");
    setWantSearch(false);
    console.log(request.data.results);
  };

  const controlSearch = () => {
    setWantSearch(!wantSearch);
  };

  return (
    <div className={`navbar ${show ? "navbar__show" : ""}`}>
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
        <button onClick={controlSearch} className={wantSearch ? "lupaOn" : ""}>
          <FaSearch />
        </button>
        <form
          className={wantSearch ? "searchOpen" : "searchClose"}
          onSubmit={handleSearch}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Títulos, gente e gêneros"
          ></input>
        </form>
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
