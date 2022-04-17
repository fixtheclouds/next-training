import { useRouter } from "next/router"
import React from "react"
import ActiveLink from "../../components/ActiveLink"
import styles from "./Menu.module.sass"

interface IMenuItemProps {
  link?: string
  children: React.ReactNode
  route?: boolean
}

const MenuItem = ({ link, children, route = false }: IMenuItemProps) => {
  const router = useRouter()
  let activeRoute = false

  if (route) {
    activeRoute = router.pathname == link
  }

  if (!link) {
    return children
  }

  return (
    <ActiveLink className={`${styles.link} ${activeRoute && styles.active}`} link={link}>
      {children}
    </ActiveLink>
  )
}

export default MenuItem
