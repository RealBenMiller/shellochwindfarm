import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import { send } from "xstate"

const FeedbackButton = () => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>Provide Feedback</Tooltip>}
    >
      <Button
        css={css`
          position: absolute;
          top: 60%;
          left: 87.5%;
          border-radius: 10%;
          background-color: white;
          color: blue;
          font-size: 14px;
          line-height: 22px;
        `}
        onClick={() => {
          send("OPEN")
        }}
      >
        Feedback
      </Button>
    </OverlayTrigger>
  )
}

export default FeedbackButton
