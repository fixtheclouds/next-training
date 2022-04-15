import React from 'react'
import Container from '../Container'
import styles from './Navbar.module.sass'

interface INavbarProps {
  children: React.ReactNode
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.wrapper}>
          {children}
        </div>
      </Container>
    </div>
  )
}

export default Navbar
