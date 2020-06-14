import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"
import StoryMapCarousel from "./Carousel"

const ModalNine = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 15%;
          left: 84%;
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
        10
      </Button>
      <Modal
        css={css`
          margin-top: 10vh;
        `}
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body closeButton>
          <StoryMapCarousel number={9} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalNine
