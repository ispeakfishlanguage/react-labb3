import Link from 'next/link'

export default function MovieDetail({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <Link href="/">Back to home</Link>
      <style jsx>{`
        div {
          padding: 1rem;
        }
        a {
          display: inline-block;
          margin-top: 1rem;
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
