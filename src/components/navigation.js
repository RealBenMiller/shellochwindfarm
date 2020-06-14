import React from "react"
import { jsx, css, Global } from "@emotion/core"
import Logo from "../images/logo.jpg"
import { Button } from "react-bootstrap"
import FeedbackForm from "../components/feedback"

const Navigation = () => {
  return (
    <>
      <div
        css={css`
          padding-top: 5px;
          width: 100vw;
          min-height: 10vh;
          background-color: white;
          position: sticky;
          top: 0;
          z-index: 9999;
        `}
      >
        <img
          css={css`
            margin-bottom: 0px;
            padding-left: 50px;
          `}
          height="50"
          src={Logo}
        />

        <FeedbackForm />
      </div>
    </>
  )
}

export default Navigation
