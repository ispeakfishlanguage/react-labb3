import { useState } from 'react'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    const res = await fetch(`/api/search?query=${query}`)
    const data = await res.json()
    setMovies(data.results)
    setLoading(false)
  }

  return (
    <div>
      <h1>Movie Database</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <LoadingSpinner /> : <MovieList movies={movies} />}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
  const data = await res.json()

  return { props: { initialMovies: data.results } }
}
