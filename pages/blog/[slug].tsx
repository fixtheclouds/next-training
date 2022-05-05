import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import BlogArticleDetailed from '../../components/Blog/BlogArticleDetailed'

// TODO: handle this more gracefully
import { movies } from '../api/data.json'

const Blog = () => {
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
      <BlogArticleDetailed/>
    </React.Fragment>
  )
}

export default Blog
