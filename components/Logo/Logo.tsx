import { IoMdAperture } from "react-icons/io"

import styles from "./Logo.module.sass"

interface ILogoProps {
  title: string
}

const Logo = ({ title }: ILogoProps) => {
  return (
    <h1 className={styles.wrapper}>
      <IoMdAperture className={styles.icon} color={styles.logoColor}/>
      {title}
    </h1>
  )
}

export default Logo
