import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const ModalFour = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 22%;
          left: 43.6%;
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
        4
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
          <iframe
            src="https://storymaps.arcgis.com/stories/11c755611d6845c8a623827db26fdd62"
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

export default ModalFour
