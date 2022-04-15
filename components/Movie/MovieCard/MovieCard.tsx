import React from "react"
import Image from "next/image"
import { IoMdEye, IoMdHeart } from "react-icons/io"

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
      <div className={styles.stats}>
        <div className={styles.views}><IoMdEye color={styles.eyeColor}/>450</div>
        <div className={styles.likes}><IoMdHeart color={styles.heartColor}/>1,653</div>
      </div>
      <div className={styles.title}>
        <a href="#">{title}</a>
      </div>
      <div className={styles.year}>{year}</div>
    </div>
  )
}

export default MovieCard
