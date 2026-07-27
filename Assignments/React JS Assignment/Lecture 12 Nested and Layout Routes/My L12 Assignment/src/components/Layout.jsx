import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavbarNavLink from './NavbarNavLink'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Header />
      <NavbarNavLink />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout