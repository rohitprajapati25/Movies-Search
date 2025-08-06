// import "./styles.css";
// import React, { useState } from "react";

// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState("");

//   const searchMovies = async () => {
//     try {
//       const res = await fetch(
//         `https://www.omdbapi.com/?s=${query}&apikey=e76f4147`
//       );
//       const data = await res.json();

//       setMovies(data.Search);
//     } catch (err) {
//       setMovies([]);
//     }
//   };

//   return (
//     <>
//       <div className="p-10">
//         <div className="flex">
//           <i className="ri-movie-fill text-7xl"></i>
//           <h1 className=" text-orange-500 text-6xl w-auto">Movies Search</h1>
//         </div>
//         <input
//           type="text"
//           className="w-6/12 mt-10"
//           placeholder="Search movies hear..."
//           onChange={(e) => {
//             setQuery(e.target.value);
//           }}
//           value={query}
//         />
//         <button
//           className="border p-2 bg-cyan-700 text-white min-w-12"
//           onClick={searchMovies}
//         >
//           Search
//         </button>
//       </div>
//       {movies.map((movie) => {
//         return (
//           <div>
//             <div className="gap-10 h-1/2 w-1/2 m-10 border border-gray-500 p-10 bg-blue-100">
//               <img src={movie.Poster} alt="" />
//               <h1 className="text-[25px] font-semibold">{movie.Title}</h1>
//               <h4>Year : {movie.Year}</h4>
//               <h4>Type : {movie.Type}</h4>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }


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
