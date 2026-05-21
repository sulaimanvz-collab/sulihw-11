import { useState } from "react";
import type { Movie } from "./types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");

  const addMovie = () => {
    if (!title.trim()) return;

    const newMovie: Movie = {
      id: Math.random(),
      title: title,
    };

    setMovies((prev) => [...prev, newMovie]);
    setTitle("");
  };

  return (
    <div>
      <h1>Movie Watch List</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie name"
      />

      <button onClick={addMovie}>Add</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
