import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const WelcomeModal = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Modal
        css={css`
          margin-top: 10vh;
          font-size: 0.8em;
          h1 {
            font-size: 22px;
            border-bottom: 2px solid lightblue;
            font-family: proxima-nova, sans-serif !important;
            font-weight: bold;
          }
        `}
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Body closeButton>
          <h1>Welcome to the Exhibition</h1>
          <p>
            Welcome to the online consultation for Shelloch Wind Farm. We have
            numbered each of the topics in suggested reading order, from 1 to 8.
            However, you are free to look at the topics in any order you wish.
            You can navigate between topics using the arrows either side of the
            content. When you have finished reading a topic, click anywhere
            outside the window to return to this main room. We hope that you
            will complete a questionnaire at the end, so that we understand your
            views on the proposal. Click anywhere to begin.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WelcomeModal
