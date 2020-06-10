import React from "react"
import "./layout.css"
import { jsx, css, Global } from "@emotion/core"
import Navigation from "../components/navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout
