import React from "react"
import Image from "next/image"
import { IoMdEye, IoMdHeart } from "react-icons/io"

import styles from "./Movie.module.sass"
import ActiveLink from "../ActiveLink"
import { IMovieProps } from "."

const MovieCard = ({ title, year, imageUrl, slug, likes, views }: IMovieProps) => {
  return (
    <div className={styles.card}>
      <ActiveLink link={`/movies/${encodeURIComponent(slug)}`} className={styles.poster}>
        <div className={styles.overlay}/>
        <Image alt="cover" width="200" height="300" layout="responsive" src={imageUrl} objectFit="cover" />
      </ActiveLink>
      <div className={styles.stats}>
        <div className={styles.views}>
          <IoMdEye color={styles.eyeColor}/>
          {likes}
        </div>
        <div className={styles.likes}>
          <IoMdHeart color={styles.heartColor}/>
          {views}
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.year}>{year}</div>
    </div>
  )
}

export default MovieCard
