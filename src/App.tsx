import { useState } from "react";
import type { Movie } from "./types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");

  return (
    <div>
      <h1>Movie Watch List</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie name"
      />

      <button>Add</button>
    </div>
  );
};

export default App;
