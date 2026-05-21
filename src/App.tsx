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

  const deleteMovie = (id: number) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const changeMovieTitle = (id: number, newTitle: string) => {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            title: newTitle,
          };
        }

        return movie;
      }),
    );
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
          <li key={movie.id}>
            <input
              value={movie.title}
              onChange={(e) => changeMovieTitle(movie.id, e.target.value)}
            />

            <button onClick={() => deleteMovie(movie.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
