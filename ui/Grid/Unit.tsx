import React from 'react'
import styles from './Grid.module.sass'

interface IUnitProps {
  size?: number
  children: React.ReactNode
}

const Unit = ({ children, size = 24 }: IUnitProps) => {
  return (
    <div className={`${styles.unit} ${styles[`unit-${size}`]}`}>
      {children}
    </div>
  )
}

export default Unit
