import { IoMdAperture } from "react-icons/io"

import styles from "./Layout.module.sass"

const Logo = () => {
  return (
    <h1><IoMdAperture className={styles.icon} color={styles.logoColor}/>MovieBox</h1>
  )
}

export default Logo
