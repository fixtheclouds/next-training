import { ScriptProps } from "next/script"
import React from "react"
import styles from "./SectionHeading.module.sass"

interface ISectionHeadingProps {
  children: React.ReactNode
}

const SectionHeading = ({ children }: ISectionHeadingProps) => {
  return (
    <h2 className={styles.heading}>{children}</h2>
  )
}

export default SectionHeading
