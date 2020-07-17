import React from "react"
import { jsx, css, Global } from "@emotion/core"
import Logo from "../images/logo.jpg"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"
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
          z-index: 10;
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
            background-color: #007fc1;
            @media (max-width: 500px) {
              font-size: 10px;
            }
            @media (min-width: 501px) {
              font-size: 16px;
            }
            a {
              color: white;
              text-decoration: none;
            }
          `}
        >
          <a href="http://www.force9energy.com/projects/current/shelloch">
            Project Website
          </a>
        </Button>
        <OverlayTrigger
        defaultShow={true}
        rootClose
        delay={{hide: 5000}}
        placement="bottom" 
        overlay={<Tooltip show placement="bottom">View new additional landscape and modelling information by clicking this button</Tooltip>}>
        <Button
          css={css`
            margin-left: 20px;
            background-color: #007fc1;
            @media (max-width: 500px) {
              font-size: 10px;
            }
            @media (min-width: 501px) {
              font-size: 16px;
            }
            a {
              color: white;
              text-decoration: none;
            }
          `}
        >
          <a href="http://force9.theimagineers.com" target="_blank">
            View 3D Model
          </a>
        </Button>
        </OverlayTrigger>
        <FeedbackForm />
      </div>
    </>
  )
}

export default Navigation
