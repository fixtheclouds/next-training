import React from 'react'
import Container from '../../Container/Container'
import styles from './Content.module.sass'

interface IContentProps {
  children: React.ReactNode
}

const Content = ({ children }: IContentProps) => {
  return (
    <main className={styles.content}>
      <Container>
        {children}
      </Container>
    </main>
  )
}

export default Content
