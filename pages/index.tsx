import type { NextPage } from 'next'
import { Grid, Unit } from '../components/Grid';
import { Container, Navbar } from '../components/Layout';

import MovieCard from '../components/MovieCard';
import SectionHeading from '../components/SectionHeading/SectionHeading';

// TODO: move data to somewhere else
const movies = [
  {
    title: "Batman",
    year: "2000",
    myRating: 5
  },
  {
    title: "Snining",
    year: "1980"
  },
  {
    title: "The Rocker",
    year: "2015"
  },
  {
    title: "The Rocker",
    year: "2015"
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
            {movies.map(({ title, year, myRating }, index) => (
              <Unit key={index} size={6}>
                <MovieCard title={title} year={year} myRating={myRating} />
              </Unit>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Home
