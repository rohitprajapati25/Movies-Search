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

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      setMovies([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <i className="ri-movie-fill text-6xl text-cyan-600"></i>
          <h1 className="text-5xl font-bold text-orange-500">Movies Search</h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <input
            type="text"
            className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Search movies here..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>

        {/* Movie List */}
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                  alt={movie.Title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
                  <p className="text-gray-600">📅 Year: {movie.Year}</p>
                  <p className="text-gray-600 capitalize">🎬 Type: {movie.Type}</p>
                </div>
               <a href={`https://bollyflix.fish/?s=${movie.Title}`} target="_blank"><button className="border border-1 rounded h-8 w-50 hover:bg-black  hover:text-white">Click To Download</button></a> 
            
              </div>
            ))}
          </div>
        ) : query.trim() !== "" ? (
          <p className="text-red-500 mt-10 font-semibold">No movies found.</p>
        ) : null}
      </div>
    </div>
  );
}
