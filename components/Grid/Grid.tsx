import React from 'react'
import styles from './Grid.module.sass'

interface IGridProps {
  children: React.ReactNode
}

const Grid = ({ children }: IGridProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Grid
