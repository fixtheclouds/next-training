import React from "react"
import Image from "next/image"
import MovieRating from "../MovieRating"

import styles from "./MovieCard.module.sass"

export interface IMovieCardProps {
  title: string
  year: string
  imageUrl: string
  myRating?: number
}

const MovieCard = ({ title, year, imageUrl }: IMovieCardProps) => {
  return (
    <div className={styles.card}>
      <a href="#" className={styles.poster}>
        <div className={styles.overlay}/>
        <Image alt="cover" width="200" height="300" layout="responsive" src={imageUrl} objectFit="cover" />
      </a>
      <div>
        <span className={styles.views}></span>
        <span className={styles.likes}></span>
      </div>
      <div className={styles.title}>
        <a href="#">{title}</a>
      </div>
      <small className={styles.year}>{year}</small>
    </div>
  )
}

export default MovieCard
