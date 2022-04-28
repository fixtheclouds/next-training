import React, { useState } from "react"
import Image from "next/image"
import { IoMdEye, IoMdHeart } from "react-icons/io"

import styles from "./Movie.module.sass"
import { IMovieProps } from "."
import { Grid, Unit } from "../../ui/Grid"

const MovieDetailed = ({ title, year, imageUrl, slug }: IMovieProps) => {
  const initialViews = 45
  const initialLikes = 60
  const [viewsCount, setAsWatched] = useState(initialViews)
  const [likesCount, like] = useState(60)
  const isWatched = viewsCount > initialViews
  const isLiked = likesCount > initialLikes

  const onEyeClick = () => {
    setAsWatched(isWatched ? viewsCount - 1 : viewsCount + 1)
  }

  const onHeartClick = () => {
    like(isLiked ? likesCount - 1 : likesCount + 1)
  }

  return (
    <Grid>
      <Unit size={8}>
        <div className={styles.cardDetailed}>
          <div className={styles.poster}>
            <div className={styles.overlay}/>
            <Image alt="cover" width="200" height="300" layout="responsive" src={imageUrl} objectFit="cover" />
          </div>
        </div>
      </Unit>
      <Unit size={16}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <div className={styles.year}>{year}</div>
          <div className={styles.description}>
            <p>
              In a metus a risus commodo scelerisque. Donec nisl nisl, lacinia sit amet ullamcorper id,
              maximus quis eros. Sed lorem ex, convallis ac malesuada pellentesque, sagittis ac nunc.
            </p>
            <p>
              Pellentesque convallis id ante id tristique. Nulla porttitor tortor quis lorem rutrum condimentum.
              Vestibulum quis metus aliquam, pharetra mi in, porta dolor.
              Pellentesque elementum diam eget magna volutpat sodales.
            </p>
          </div>
          <div className={styles.actions}>
            <IoMdEye color={isWatched ? styles.eyeColor : 'gray'} onClick={onEyeClick}/>{viewsCount}
            <IoMdHeart color={isLiked ? styles.heartColor : 'gray'} onClick={onHeartClick}/>{likesCount}
          </div>
        </div>
      </Unit>
    </Grid>
  )
}

export default MovieDetailed
