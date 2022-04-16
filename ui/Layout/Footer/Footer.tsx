import React from 'react'
import Container from '../../Container/Container'
import styles from './Footer.module.sass'

interface IFooterProps {
  children: React.ReactChild
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Container>
        {children}
      </Container>
    </footer>
  )
}

export default Footer
