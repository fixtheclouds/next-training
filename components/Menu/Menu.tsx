import React from "react"

import styles from "./Menu.module.sass"

interface IMenuProps {
  children: React.ReactNode
}

const Menu = ({ children }: IMenuProps) => {
  const childrenMapped = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return (
        <li className={styles.li}>{React.cloneElement(child)}</li>
      )
    }
  })

  return (
    <ul className={styles.ul}>
      {childrenMapped}
    </ul>
  )
}

export default Menu
