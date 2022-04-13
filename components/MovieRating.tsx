const MovieRating = () => {
  return (
    <div>
      {Array.from(new Array(5)).map((_, i) => (
        <i key={i}/>
      ))}
    </div>
  )
}

export default MovieRating
