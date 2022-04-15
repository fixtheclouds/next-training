import React from 'react'
import Container from './Container'
import styles from './Layout.module.sass'

interface INavbarProps {
  children: React.ReactNode
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <div className={styles.navbar}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Navbar
