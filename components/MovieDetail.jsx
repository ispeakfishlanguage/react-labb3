// components/MovieDetail.js
export default function MovieDetail({ movie }) {
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <style jsx>{`
          div {
            padding: 1rem;
          }
        `}</style>
      </div>
    )
  }
  