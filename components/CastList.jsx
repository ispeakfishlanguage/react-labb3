// components/CastList.js
export default function CastList({ cast }) {
    return (
      <div>
        <h3>Cast</h3>
        <ul>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <p>{actor.name} as {actor.character}</p>
            </li>
          ))}
        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    )
  }
  