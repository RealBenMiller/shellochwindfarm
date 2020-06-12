import React from "react"
import "./layout.css"
import { jsx, css, Global } from "@emotion/core"
import Navigation from "../components/navigation"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/dgt0hey.css" />
      </Helmet>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
