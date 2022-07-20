import React from "react";
import { movies } from "../data"
function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <div className="item">
      {movies.map((movie)=>(
        <div className="movie">
          <div>{movie.title}</div>
          <div>{movie.time}</div>
          <div>{movie.genres}</div>
        </div>
      ))}
    </div>
    </div>;
}

export default Movies;
