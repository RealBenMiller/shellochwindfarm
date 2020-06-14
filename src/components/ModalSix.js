import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"
import StoryMapCarousel from "./Carousel"

const ModalSix = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 81%;
          left: 59%;
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
        6
      </Button>
      <Modal
        css={css`
          margin-top: 10vh;
        `}
        size="xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body closeButton>
          <StoryMapCarousel number={5} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSix
