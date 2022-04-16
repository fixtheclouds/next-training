import styles from './UserLink.module.sass'
import Image from 'next/image'

const defaultAvatarUrl = 'https://i.imgur.com/oc1jKqds.jpg'

interface IUserLinkProps {
  name: string
  avatarUrl?: string
  small?: boolean
}

const UserLink = ({ name, small = false, avatarUrl = defaultAvatarUrl}: IUserLinkProps) => {
  return (
    <div className={`${styles.wrapper} ${small && styles.wrapperSmall}`}>
      <div>
        <Image
          className={styles.avatar}
          alt={name}
          src={avatarUrl}
          width={small ? 20 : 30}
          height={small ? 20 : 30}
        />
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  )
}

export default UserLink
