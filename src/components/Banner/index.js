import React, { useState, useEffect } from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

import axios from "../../axios";
import requests from "../../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__content">
        <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
        <p>{truncate(movie?.overview, 140)}</p>
        <div className="banner__buttons">
          <button>
            <FaPlay /> Assistir
          </button>
          <button>
            <FaInfoCircle /> Mais informações
          </button>
        </div>
      </div>
      {/* <div className="banner--overlay"></div> */}
    </header>
  );
}

export default Banner;
