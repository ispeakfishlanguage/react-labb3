import { useRouter } from 'next/router'
import MovieDetail from '../../components/MovieDetail'
import CastList from '../../components/CastList'
import SimilarMovies from '../../components/SimilarMovies'

export default function MoviePage({ movie, cast, similarMovies }) {
  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <MovieDetail movie={movie} />
      <CastList cast={cast || []} />
      <SimilarMovies movies={similarMovies || []} />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

  let movie = {}
  let cast = []
  let similarMovies = []

  try {
    const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    movie = await resMovie.json()

    const resCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
    const castData = await resCast.json()
    cast = castData.cast

    const resSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)
    const similarData = await resSimilar.json()
    similarMovies = similarData.results
  } catch (error) {
    console.error('Failed to fetch movie details:', error)
  }

  return {
    props: {
      movie,
      cast: cast || [],
      similarMovies: similarMovies || []
    }
  }
}
