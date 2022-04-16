import React from 'react'
import Container from '../../Container/Container'
import styles from './Header.module.sass'

interface INavbarProps {
  children: React.ReactNode
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.wrapper}>
          {children}
        </div>
      </Container>
    </header>
  )
}

export default Navbar
