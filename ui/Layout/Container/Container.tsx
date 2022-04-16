import React from 'react'
import styles from './Container.module.sass'

interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container
