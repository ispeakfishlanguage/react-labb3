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
      <CastList cast={cast} />
      <SimilarMovies movies={similarMovies} />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
  const movie = await resMovie.json()

  const resCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY`)
  const castData = await resCast.json()
  const cast = castData.cast

  const resSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=YOUR_API_KEY`)
  const similarData = await resSimilar.json()
  const similarMovies = similarData.results

  return {
    props: {
      movie,
      cast,
      similarMovies
    }
  }
}
