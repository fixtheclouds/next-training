import type { NextPage } from 'next'
import React from 'react'

import { Grid, Unit } from '../ui/Grid'
import SectionHeading from '../ui/SectionHeading'

import { MovieCard } from '../components/Movie'
import BlogArticleCard from '../components/Blog/BlogArticleCard'

import { movies } from './api/data.json'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>MovieBox</title>
      </Head>
      <SectionHeading>Trending movies</SectionHeading>
      <Grid>
        {movies.map((keys, index) => (
          <Unit key={index} size={6}>
            <MovieCard {...keys} />
          </Unit>
        ))}
      </Grid>
      <SectionHeading>Blog</SectionHeading>
      <Grid>
        <Unit size={8}>
          <BlogArticleCard authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news">
            Pellentesque convallis id ante id tristique. Nulla porttitor tortor quis lorem rutrum condimentum.
            Vestibulum quis metus aliquam, pharetra mi in, porta dolor.
            Pellentesque elementum diam eget magna volutpat sodales.
          </BlogArticleCard>
        </Unit>
        <Unit size={8}>
          <BlogArticleCard authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news" imageUrl='https://i.imgur.com/7Xw8fEUm.jpg'>
          In a metus a risus commodo scelerisque. Donec nisl nisl, lacinia sit amet ullamcorper id,
          maximus quis eros. Sed lorem ex, convallis ac malesuada pellentesque, sagittis ac nunc.
          </BlogArticleCard>
        </Unit>
        <Unit size={8}>
          <BlogArticleCard authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news" imageUrl='https://i.imgur.com/7iKVNhOm.png'>
            Integer leo orci, tempor a blandit at, ultrices a nunc. Phasellus mattis arcu sed ornare imperdiet.
            In mattis nulla non nulla commodo bibendum ut sed ligula.
          </BlogArticleCard>
        </Unit>
      </Grid>
    </React.Fragment>
  )
}

export default Home
