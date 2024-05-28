// components/SearchBar.js
import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/search?query=${query}`)
    const data = await res.json()
    onSearch(data.results)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
      <style jsx>{`
        form {
          display: flex;
          margin-bottom: 1rem;
        }
        input {
          flex: 1;
          padding: 0.5rem;
          font-size: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
        }
      `}</style>
    </form>
  )
}
