import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const WelcomeModal = () => {
  const showVar = function(){
    if (typeof window !== "undefined") {
      const getQueryStringValue = window.location.search
      if (getQueryStringValue === "?click") {
        return false
      } else {
        return true  
      }
    }
  }
  const [show, setShow] = useState(showVar())
  const handleClose = () => setShow(false)
  

  showVar()

  return (
    <>
      <Modal
        css={css`
          z-index: 9999;
          margin-top: 10vh;
          @media (max-width: 600px) {
            margin-left: 10%;
            font-size: 12px;
            max-width: 80%;
          }
          h1 {
            font-size: 22px;
            border-bottom: 4px solid lightblue;
            font-family: proxima-nova, sans-serif !important;
            font-weight: bold;
          }
          .hidden {
            display: none !important;
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
            interactive Story Map which is set out over 9 Boards.
          </p>
          <p>
            We would welcome your comments and feedback and would appreciate if
            you could take the time to complete a Feedback Form. To work your
            way through the exhibition, scroll to the right to see more boards.
            You can easily click between boards using the arrows at the top of
            each board.
          </p>
          <p>
            Force 9 Energy will be hosting a live interactive question and answer session for the proposed Shelloch Wind Farm on Wednesday 15th July from 4-7pm. Members of the project team will be available to answer any questions and queries you may have. Click on the 'Project Website' button at the top of the page for more details.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WelcomeModal
