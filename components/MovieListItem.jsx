import MovieListItem from './MovieListItem'

export default function MovieList({ movies }) {
  if (!movies) return <p>No movies to display</p>

  return (
    <div>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
