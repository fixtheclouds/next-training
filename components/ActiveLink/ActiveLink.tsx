import { useRouter } from 'next/router'
import React, { HTMLAttributes } from 'react'

interface IActiveLinkProps {
  children: React.ReactNode
  link: string
}

function ActiveLink({ link, children, ...props }: IActiveLinkProps & HTMLAttributes<HTMLElement>) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push(link)
  }

  return (
    <a href={link} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default ActiveLink
