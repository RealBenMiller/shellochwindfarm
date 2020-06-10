import React from "react"
import { jsx, css, Global } from "@emotion/core"
import Logo from "../images/logo.jpg"
import { Button } from "react-bootstrap"

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
          z-index: 1;
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

        <Button
          css={css`
            margin-left: 20px;
            a {
              text-decoration: none;
              color: white;
            }
          `}
        >
          <a
            href="
          /"
          >
            Virtual Exhibition
          </a>
        </Button>
        <Button
          css={css`
            margin-left: 20px;
            a {
              text-decoration: none;
              color: white;
            }
          `}
        >
          <a
            href="
          /feedback"
          >
            Provide Feedback
          </a>
        </Button>
      </div>
    </>
  )
}

export default Navigation
