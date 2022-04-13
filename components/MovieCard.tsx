import React from "react"
import Image from "next/image"
import { Card } from "antd"
import { EllipsisOutlined } from '@ant-design/icons'
import MovieRating from "./MovieRating"

const { Meta } = Card

export interface IMovieCardProps {
  title: string
  year: string
  myRating?: number
}

const MovieCard = ({ title, year }: IMovieCardProps) => {
  return (
    <Card
      cover={<Image alt="cover" width="107" height="160" layout="responsive" src="https://i.imgur.com/ZV7mxiLt.jpg"/>}
      actions={
        [
          <MovieRating key="stars" />,
          <EllipsisOutlined key="ellipsis" />
        ]
      }
    >
      <Meta title={title} description={year}/>
    </Card>
  )
}

export default MovieCard
