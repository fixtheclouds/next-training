import type { NextPage } from 'next'
import React from 'react'

import { Grid, Unit } from '../ui/Grid'
import { Content, Header, Footer } from '../ui/Layout'
import { Menu, MenuItem } from '../ui/Menu'
import SectionHeading from '../ui/SectionHeading'

import Logo from '../components/Logo'
import MovieCard from '../components/Movie/MovieCard'
import BlogArticle from '../components/Blog/BlogArticle/BlogArticle'
import UserLink from '../components/User/UserLink'

// TODO: move data to somewhere else
const movies = [
  {
    title: "The Darkest Knight",
    year: "2010",
    imageUrl: 'https://i.imgur.com/y2rbu4Im.jpg'
  },
  {
    title: "Sicilian Romance",
    year: "2000",
    myRating: 5,
    imageUrl: 'https://i.imgur.com/w4T834Dm.jpg'
  },
  {
    title: "Spidey",
    year: "2007",
    imageUrl: 'https://i.imgur.com/L0TmZy4m.jpg'
  },
  {
    title: "The Killer Doll",
    year: "2015",
    imageUrl: 'https://i.imgur.com/5ZTMjUDm.jpg'
  }
]

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header>
        <Logo title="MovieBox"/>
        <Menu grow>
          <MenuItem link="#">Members</MenuItem>
          <MenuItem link="#">Blog</MenuItem>
        </Menu>
        <UserLink name="Carlos Bent"/>
      </Header>
      <Content>
        <SectionHeading>Trending movies</SectionHeading>
        <Grid>
          {movies.map(({ title, year, myRating, imageUrl }, index) => (
            <Unit key={index} size={6}>
              <MovieCard title={title} year={year} myRating={myRating} imageUrl={imageUrl} />
            </Unit>
          ))}
        </Grid>
        <SectionHeading>Blog</SectionHeading>
        <Grid>
          <Unit size={8}>
            <BlogArticle authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news">
              Pellentesque convallis id ante id tristique. Nulla porttitor tortor quis lorem rutrum condimentum.
              Vestibulum quis metus aliquam, pharetra mi in, porta dolor.
              Pellentesque elementum diam eget magna volutpat sodales.
            </BlogArticle>
          </Unit>
          <Unit size={8}>
            <BlogArticle authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news" imageUrl='https://i.imgur.com/7Xw8fEUm.jpg'>
            In a metus a risus commodo scelerisque. Donec nisl nisl, lacinia sit amet ullamcorper id,
            maximus quis eros. Sed lorem ex, convallis ac malesuada pellentesque, sagittis ac nunc.
            </BlogArticle>
          </Unit>
          <Unit size={8}>
            <BlogArticle authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news" imageUrl='https://i.imgur.com/7iKVNhOm.png'>
              Integer leo orci, tempor a blandit at, ultrices a nunc. Phasellus mattis arcu sed ornare imperdiet.
              In mattis nulla non nulla commodo bibendum ut sed ligula.
            </BlogArticle>
          </Unit>
        </Grid>
      </Content>
      <Footer>
        <p>
          &copy; 2022
          Designed &amp; developed by&nbsp;
          <a href="https://github.com/fixtheclouds" rel="noreferrer" target="_blank">FixTheClouds</a>
        </p>
      </Footer>
    </React.Fragment>
  )
}

export default Home
