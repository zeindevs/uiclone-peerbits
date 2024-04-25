import React from 'react'

import Footer from './footer'
import Navbar from './navbar'

type Props = {}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
