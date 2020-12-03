import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import "./Movies.css";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

function Movies() {
  const { loading, error, movies } = useGlobalContext();
  console.log(movies);
  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) return <div className="error"></div>;
  return (
    <div className="movies-info">
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Poster: poster, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie-info">
            <article key={id}>
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p className="year">{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default Movies;
