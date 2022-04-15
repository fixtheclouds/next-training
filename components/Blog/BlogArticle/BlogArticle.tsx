import Image from "next/image"
import React from "react"
import { IoMdPerson } from "react-icons/io"
import styles from "./BlogArticle.module.sass"

interface IBlogArticleProps {
  imageUrl?: string
  title: string
  children: React.ReactNode
  authorName: string
  authorSlug: string
  slug: string
}

const defaultImageUrl = 'https://i.imgur.com/ZV7mxiL.jpg'

const BlogArticle = ({
  title,
  slug,
  authorName,
  authorSlug,
  children,
  imageUrl = defaultImageUrl
}: IBlogArticleProps) => {
  return (
    <div className={styles.card}>
      <a href="#" className={styles.cover}>
        <Image
          alt="cover"
          width="200"
          height="100"
          layout="responsive"
          src={imageUrl}
          objectFit="cover"
        />
      </a>
      <div className={styles.content}>
        <div className={styles.author}>
          <a href={`/users/${authorSlug}`}>
            <IoMdPerson className={styles.icon}/>
            {authorName}
          </a>
        </div>
        <h3>{title}</h3>
        <p>
          {children}
        </p>
        <a href={`/articles/${slug}`} className={styles.readMore}>Read more</a>
      </div>
    </div>
  )
}

export default BlogArticle