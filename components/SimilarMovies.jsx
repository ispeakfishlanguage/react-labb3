import Link from 'next/link'
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
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <a>
                <MovieListItem movie={movie} />
              </a>
            </Link>
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
