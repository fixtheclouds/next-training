import type { NextPage } from 'next'
import { Col, Divider, Layout, Menu, Row } from 'antd';

import MovieCard from '../components/MovieCard';

const { Header, Content, Footer } = Layout;

// TODO: move data to somewhere else
const movies = [
  {
    title: "Batman",
    year: "2000",
    myRating: 5
  },
  {
    title: "Snining",
    year: "1980"
  },
  {
    title: "The Rocker",
    year: "2015"
  }
]

const Home: NextPage = () => {
  return (
    <Layout>
      <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="logo">
              MovieBox
            </Menu.Item>
          </Menu>
      </Header>
      <Content style={{ padding: 64 }}>
        <Divider orientation="left">My Movies</Divider>
        <Row gutter={32}>
          {movies.map(({ title, year, myRating }, index) => (
            <Col key={index} span={4}>
              <MovieCard  title={title} year={year} myRating={myRating} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  )
}

export default Home
