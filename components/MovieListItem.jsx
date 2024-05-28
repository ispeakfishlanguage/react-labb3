import Link from 'next/link'

export default function MovieListItem({ movie }) {
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.overview.substring(0, 100)}...</p>
      <style jsx>{`
        div {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  )
}
