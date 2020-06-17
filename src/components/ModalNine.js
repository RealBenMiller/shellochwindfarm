import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import StoryMapCarousel from "./Carousel"
import FeedbackForm from "../components/feedback"

const ModalNine = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <OverlayTrigger placement="top" overlay={<Tooltip>View Board</Tooltip>}>
        <Button
          css={css`
            position: absolute;
            top: 81%;
            left: 88.9%;
            border-radius: 10px;
            border: 2px solid #007fc1;
            background-color: white;
            color: #007fc1;
            font-size: 10px;
            padding: 5px;
            &:hover {
              background-color: #007fc1;
            }
            @media (min-width: 815px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 88.9%;
            }

            @media (max-width: 400px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 89.9%;
            }

            @media (min-width: 1500px) {
              left: 90.2%;
            }
          `}
          onClick={handleShow}
        >
          Next Steps
        </Button>
      </OverlayTrigger>
      <Modal
        css={css`
          .modal-dialog {
            max-width: 100%;
            height: 85vh;
          }
          margin-top: 10vh;
        `}
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          css={css`
            border: none;
          `}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <StoryMapCarousel number={8} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalNine
