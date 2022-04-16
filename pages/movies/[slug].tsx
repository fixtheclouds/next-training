import { useRouter } from 'next/router'

const Movies = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Movies: {slug}</p>
}

export default Movies
