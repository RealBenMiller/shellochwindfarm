import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import StoryMapCarousel from "./Carousel"

const ModalOne = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <OverlayTrigger placement="top" overlay={<Tooltip>Introduction</Tooltip>}>
        <Button
          css={css`
            position: absolute;
            top: 22%;
            left: 27.2%;
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
          1
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
          <StoryMapCarousel number={0} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalOne
