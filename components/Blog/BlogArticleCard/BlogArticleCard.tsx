import Image from "next/image"
import React from "react"
import ActiveLink from "../../ActiveLink"
import UserLink from "../../User/UserLink"
import styles from "./BlogArticleCard.module.sass"

interface IBlogArticleProps {
  imageUrl?: string
  title: string
  children: React.ReactNode
  authorName: string
  authorSlug: string
  slug: string
}

const defaultImageUrl = 'https://i.imgur.com/ZV7mxiL.jpg'

const BlogArticleCard = ({
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
            <UserLink name={authorName} small/>
          </a>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>
          {children}
        </p>
        <ActiveLink link={`/blog/${encodeURIComponent(slug)}`} className={styles.readMore}>
          Read more
        </ActiveLink>
      </div>
    </div>
  )
}

export default BlogArticleCard
