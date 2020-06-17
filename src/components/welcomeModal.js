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
          z-index: 9999;
          margin-top: 10vh;
          @media (max-width: 600px) {
            margin-left: 10%;
            font-size: 1em;
            max-width: 80%;
          }
          h1 {
            font-size: 22px;
            border-bottom: 4px solid lightblue;
            font-family: proxima-nova, sans-serif !important;
            font-weight: bold;
          }
        `}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          css={css`
            border: none;
            padding-bottom: none;
          `}
          closeButton
        >
          <h1>Welcome to the Exhibition</h1>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thank you for taking the time to visit our Virtual Consultation Room
            and view the proposals for Shelloch. We have developed an
            interactive Story Map which is set out over 9 Boards. Whilst we have
            numbered them in order, please feel free to read them in whatever
            order you prefer. You can also easily click between boards using the
            arrows at the side of each board.
          </p>
          <p>
            {" "}
            We would also welcome your comments and feedback and would
            appreciate if you could take the time to complete a Feedback Form.
          </p>
          <p>
            To work your way through the exhibition, scroll to the right to see
            more boards.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WelcomeModal
