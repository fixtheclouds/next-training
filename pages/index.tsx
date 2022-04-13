import type { NextPage } from 'next'

import MovieCard from '../components/MovieCard';

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
  }
]

const Home: NextPage = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            MovieBox
          </li>
        </ul>
      </nav>
      <div>
        <div>My Movies</div>
        <div>
          {movies.map(({ title, year, myRating }, index) => (
            <div key={index}>
              <MovieCard  title={title} year={year} myRating={myRating} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
