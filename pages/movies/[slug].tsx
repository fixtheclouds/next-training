import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MovieDetailed } from '../../components/Movie'

// TODO: handle this more gracefully
import { movies } from '../api/data.json'

const Movies = () => {
  const router = useRouter()
  const { slug } = router.query
  const movieData = movies.find((movie: { slug: string }) => movie.slug == slug)
  if (!movieData) {
    return 'Oops'
  }

  return (
    <React.Fragment>
      <Head>
        <title>MovieBox | {movieData.title}</title>
      </Head>
      <MovieDetailed {...movieData}/>
    </React.Fragment>
  )
}

export default Movies
