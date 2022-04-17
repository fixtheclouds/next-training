import React from "react"
import ActiveLink from "../../components/ActiveLink"
import Logo from "../../components/Logo"
import UserLink from "../../components/User/UserLink"
import { Menu, MenuItem } from "../Menu"
import { Content } from "./Content"
import { Footer } from "./Footer"
import { Header } from "./Header"

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <React.Fragment>
      <Header>
        <ActiveLink link="/">
          <Logo title="MovieBox"/>
        </ActiveLink>
        <Menu grow>
          <MenuItem route link="#">Blog</MenuItem>
          <MenuItem route link="/about">About</MenuItem>
        </Menu>
        <UserLink name="Carlos Bent"/>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        <p>
          &copy; 2022
          Designed &amp; developed by&nbsp;
          <a href="https://github.com/fixtheclouds" rel="noreferrer" target="_blank">FixTheClouds</a>
        </p>
      </Footer>
    </React.Fragment>
  )
}

export default Layout
