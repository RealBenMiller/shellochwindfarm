import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

import StoryMapCarousel from "./Carousel"

const ModalThree = () => {
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
            Project Developers
          </Tooltip>
        }
      >
        <Button
          css={css`
            position: absolute;
            top: 81%;
            left: 35.3%;
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
          3
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
          <StoryMapCarousel number={2} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalThree
