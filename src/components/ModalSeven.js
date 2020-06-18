import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"

import StoryMapCarousel from "./Carousel"

const ModalSeven = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <OverlayTrigger placement="top" overlay={<Tooltip>View Board</Tooltip>}>
        <Button
          css={css`
            position: absolute;
            top: 22%;
            left: 72%;
            border-radius: 10px;
            border: 2px solid #007fc1;
            background-color: white;
            color: #007fc1;
            font-size: 10px;
            padding: 5px;
            &:hover {
              background-color: #007fc1;
            }

            @media (min-width: 450px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 74.4%;
            }

            @media (min-width: 815px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 72.8%;
            }

            @media (min-width: 1750px) {
              left: 75.2%;
            }
          `}
          onClick={handleShow}
        >
          Project Assessments
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
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          css={css`
            border: none;
          `}
          closeButton
        ></Modal.Header>
        <Modal.Body closeButton>
          <StoryMapCarousel number={6} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSeven
