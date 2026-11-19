
import { useState } from "react";
import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

function MovieList({ title, movies }) {

  const [ratings, setRatings] = useState({});

  function handleRate(id, star) {
    setRatings(prev => ({
      ...prev,
      [id]: prev[id] === star ? 0 : star
    }));
  }

  return (
    <section className="movie-list">
      <h2 className="movie-list__title">{title}</h2>

      {movies.length === 0 && (
        <p className="movie-list__empty">לא נמצאו סרטים</p>
      )}

      <div className="movie-list__grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            duration={movie.duration}
            genre={movie.genre}
            rating={movie.rating}
            poster={movie.poster}
            available={movie.available}
            myRating={ratings[movie.id] || 0}
            onRate={(star) => handleRate(movie.id, star)}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
