// components/GenreList.js
export default function GenreList({ genres }) {
    return (
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin: 0.5rem 0;
          }
        `}</style>
      </ul>
    )
  }
  