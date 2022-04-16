import type { NextPage } from 'next'
import React from 'react'
import { IoMdAperture } from 'react-icons/io'
import BlogArticle from '../components/Blog/BlogArticle/BlogArticle'

// TODO: Rewrite imports using index files
import { Grid, Unit } from '../components/Grid'
import { Container, Header } from '../components/layout'
import Footer from '../components/layout/Footer/Footer'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import MenuItem from '../components/Menu/MenuItem'
import MovieCard from '../components/Movie/MovieCard/MovieCard'
import SectionHeading from '../components/SectionHeading/SectionHeading'

// TODO: move data to somewhere else
const movies = [
  {
    title: "Sicilian Romance",
    year: "2000",
    myRating: 5,
    imageUrl: 'https://i.imgur.com/w4T834Dm.jpg'
  },
  {
    title: "The Darkest Knight",
    year: "2010",
    imageUrl: 'https://i.imgur.com/y2rbu4Im.jpg'
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
    <div>
      <main>
        <Header>
          <Logo title="MovieBox"/>
          <Menu>
            <MenuItem link="#">Members</MenuItem>
            <MenuItem link="#">Blog</MenuItem>
          </Menu>
        </Header>
        <Container>
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
          <h3>The text</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </Container>
        <Footer>
          <p>
            &copy; 2022
            Designed & developed by&nbsp;
            <a href="https://github.com/fixtheclouds" rel="noreferrer" target="_blank">FixTheClouds</a>
          </p>
        </Footer>
      </main>
    </div>
  )
}

export default Home
