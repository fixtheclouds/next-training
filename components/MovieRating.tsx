import { StarOutlined } from "@ant-design/icons"
import { Space } from "antd"

const MovieRating = () => {
  return (
    <Space size="small" align="center">
      {Array.from(new Array(5)).map((_, i) => (
        <StarOutlined key={i}/>
      ))}
    </Space>
  )
}

export default MovieRating
