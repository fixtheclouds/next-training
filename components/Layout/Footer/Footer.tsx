import React from 'react'
import Container from '../Container'
import styles from './Footer.module.sass'

interface IFooterProps {
  children: React.ReactChild
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <div className={styles.footer}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Footer
