// components/SimilarMovies.js
import MovieListItem from './MovieListItem'

export default function SimilarMovies({ movies }) {
  return (
    <div>
      <h3>Similar Movies</h3>
      {movies.length === 0 ? (
        <p>No similar movies found.</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <style jsx>{`
        div {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}
