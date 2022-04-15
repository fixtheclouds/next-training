import type { NextPage } from 'next'
import { Grid, Unit } from '../components/Grid';
import { Container, Navbar } from '../components/Layout';

import MovieCard from '../components/Movie/MovieCard/MovieCard';
import SectionHeading from '../components/SectionHeading/SectionHeading';

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
        <Navbar>
          <h1>MovieBox</h1>
        </Navbar>
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
          <h3>The text</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </main>
    </div>
  )
}

export default Home
