import React from "react"
import styles from "./Menu.module.sass"

interface IMenuItemProps {
  link?: string
  children: React.ReactNode
}

const MenuItem = ({ link, children }: IMenuItemProps) => {
  return (
    <a className={styles.link} href={link}>{children}</a>
  )
}

export default MenuItem
