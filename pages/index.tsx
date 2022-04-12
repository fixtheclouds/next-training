import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <Button>Test button</Button>

        <p>
          Content goes here
        </p>
      </Content>
    </Layout>
  )
}

export default Home
