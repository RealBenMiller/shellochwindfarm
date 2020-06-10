import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const ModalSix = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 84%;
          left: 60.2%;
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
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <iframe
            src="https://storymaps.arcgis.com/stories/783e8eda99d94acd8b7b22ab731c115d"
            frameborder="0"
            css={css`
              position: relative;
              width: 100%;
              min-height: 500px;
            `}
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSix
