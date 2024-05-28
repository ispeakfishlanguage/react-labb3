import React from 'react'

export default function MovieListItem({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <style jsx>{`
        div {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  )
}
