import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import StoryMapCarousel from "../components/Carousel"

const ModalTwo = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip
            css={css`
              background-color: lightblue;
            `}
          >
            Site Context
          </Tooltip>
        }
      >
        <Button
          css={css`
            position: absolute;
            top: 22%;
            left: 33.5%;
            height: 45px;
            width: 45px;
            border-radius: 50%;
            background-color: white;
            color: blue;
            font-size: 14px;
            line-height: 22px;
          `}
          onClick={handleShow}
        >
          2
        </Button>
      </OverlayTrigger>
      <Modal
        css={css`
          margin-top: 10vh;
        `}
        size="xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body closeButton>
          <StoryMapCarousel number={1} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalTwo
