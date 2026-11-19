
import "./MovieCard.css";

function MovieCard({ title, year, genre, rating, poster, available, duration, myRating, onRate }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        <img src={poster} alt={title} />
        {available && <span className="movie-card__badge">זמין לצפייה</span>}
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>

        <p className="movie-card__meta">
          {year} · {duration} דק׳
        </p>

        <div className="movie-card__footer">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__rating">★ {rating}</span>
        </div>

        <div className="my-rating">
          <span>הדירוג שלי:</span>

          {Array.from({ length: 5 }, (_, index) => {
            const star = index + 1;

            return (
              <button
                key={star}
                onClick={() => onRate(star)}
              >
                {star <= myRating ? "★" : "☆"}
              </button>
            );
          })}
        </div>

      </div>
    </article>
  );
}

export default MovieCard;
