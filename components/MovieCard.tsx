import React from "react"
import Image from "next/image"
import MovieRating from "./MovieRating"

export interface IMovieCardProps {
  title: string
  year: string
  myRating?: number
}

const MovieCard = ({ title, year }: IMovieCardProps) => {
  return (
    <div>
      <Image alt="cover" width="107" height="160" layout="responsive" src="https://i.imgur.com/ZV7mxiLt.jpg"/>
      <div>
        <MovieRating key="stars" />
      </div>
      <div>
        <p>{title}</p>
        <small>{year}</small>
      </div>
    </div>
  )
}

export default MovieCard
