import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import StoryMapCarousel from "./Carousel"

const ModalFour = () => {
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
            left: 46.8%;
            border-radius: 10px;
            border: 2px solid #007fc1;
            background-color: white;
            color: #007fc1;
            font-size: 10px;
            padding: 5px;
            &:hover {
              background-color: #007fc1;
            }

            @media (max-width: 400px) and (max-width: 814px) {
              left: 49.8%;
            }

            @media (min-width: 815px) and (max-width: 1100px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 48%;
            }

            @media (min-width: 1100px) and (max-width: 1749px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 47.5%;
            }

            @media (min-width: 1750px) {
              height: 45px;
              font-size: 14px;
              line-height: 22px;
              left: 49.8%;
            }
          `}
          onClick={handleShow}
        >
          Climate Emergency
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
        size="xl"
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
          <StoryMapCarousel number={3} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalFour
