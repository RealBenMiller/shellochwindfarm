import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const FeedbackModal = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Modal show={show}>
        <Modal.Body closeButton>
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
              Return to HomePage
            </a>
          </Button>
          <h1>Have Your Say</h1>
          <p>Final draft of form to be dropped in here</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FeedbackModal
