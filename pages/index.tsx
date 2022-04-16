import type { NextPage } from 'next'
import React from 'react'

import { Grid, Unit } from '../ui/Grid'
import { Content, Header, Footer } from '../ui/Layout'
import { Menu, MenuItem } from '../ui/Menu'
import SectionHeading from '../ui/SectionHeading'

import Logo from '../components/Logo'
import MovieCard from '../components/Movie/MovieCard'
import BlogArticle from '../components/Blog/BlogArticle/BlogArticle'

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
        <Menu>
          <MenuItem link="#">Members</MenuItem>
          <MenuItem link="#">Blog</MenuItem>
        </Menu>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </BlogArticle>
          </Unit>
          <Unit size={8}>
            <BlogArticle authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news" imageUrl='https://i.imgur.com/7Xw8fEUm.jpg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </BlogArticle>
          </Unit>
          <Unit size={8}>
            <BlogArticle authorName="John Doe" authorSlug="john" title="Breaking news" slug="breaking-news" imageUrl='https://i.imgur.com/7iKVNhOm.png'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
