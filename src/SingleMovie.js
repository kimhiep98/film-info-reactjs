import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./SingleMovie.css";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

function SingleMovie() {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);
  console.log(movie);
  if (loading) {
    return <div>loading</div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Title: title,
    Year: year,
    Actors: actors,
    Plot: plot,
    Language: language,
    Country: country,
    Poster: poster,
    imdbRating,
  } = movie;
  return (
    <section className="single-movie-info">
      <img src={poster === "N/A" ? url : poster} alt={title} />
      <div className="single-movie-descript">
        <h2>{title}</h2>
        <p>IMDB: {imdbRating}</p>
        <p>Release date: {year}</p>
        <p>Actor: {actors}</p>
        <p>Country: {country}</p>
        <p>Description: {plot}</p>
      </div>
      <Link to="/" className="btn">
        <button>back to movies</button>
      </Link>
    </section>
  );
}

export default SingleMovie;
