import React, { useState, useEffect } from "react";
import axios from "../../axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, isFirstRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`row ${isFirstRow && "row__first"}`}>
      <h3>{title}</h3>
      <div className="row__movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__movies__poster ${
              isLargeRow && "row__movies__posterLarge"
            }`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
