import MovieCard from "./MovieCard";
import MovieDetailed from "./MovieDetailed";

export interface IMovieProps {
  title: string
  year: string
  slug: string
  imageUrl: string
  myRating?: number
}

export { MovieCard, MovieDetailed }
