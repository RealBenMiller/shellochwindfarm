import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const WelcomeModal = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Modal onHide={handleClose}>
        <Modal.Body closeButton>
          <h1>Welcome to the Exhibition</h1>
          <p>
            Welcome to the online consultation for Shelloch wind farm. We have
            numbered each of the topics in suggested reading order, from 1 to
            10. If you are reading them in order, you can click at the end of
            each topic to take you to the next board. However, you are free to
            look at the topics in any order you wish. When you have finished
            reading a topic, click anywhere outside the window to return to this
            main room. We hope that you will complete a questionnaire at the
            end, so that we understand your views on the proposal
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WelcomeModal
