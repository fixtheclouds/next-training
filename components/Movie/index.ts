import MovieCard from "./MovieCard";
import MovieDetailed from "./MovieDetailed";

export interface IMovieProps {
  title: string
  year: string
  slug: string
  imageUrl: string
  likes: number,
  views: number,
  myRating?: number
}

export { MovieCard, MovieDetailed }
