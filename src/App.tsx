import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=e76f4147`
      );
      const data = await res.json();

      setMovies(data.Search);
    } catch (err) {
      setMovies([]);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex">
          <i className="ri-movie-fill text-7xl"></i>
          <h1 className=" text-orange-500 text-6xl w-auto">Movies Search</h1>
        </div>
        <input
          type="text"
          className="w-6/12 mt-10"
          placeholder="Search movies hear..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <button
          className="border p-2 bg-cyan-700 text-white min-w-12"
          onClick={searchMovies}
        >
          Search
        </button>
      </div>
      {movies.map((movie) => {
        return (
          <div>
            <div className="gap-10 h-1/2 w-1/2 m-10 border border-gray-500 p-10 bg-blue-100">
              <img src={movie.Poster} alt="" />
              <h1 className="text-[25px] font-semibold">{movie.Title}</h1>
              <h4>Year : {movie.Year}</h4>
              <h4>Type : {movie.Type}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}
