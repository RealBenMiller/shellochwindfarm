import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"

const ModalTwo = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 22%;
          left: 32.8%;
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
            src="https://storymaps.arcgis.com/stories/9f9c0cdeff284d52a0d38413fe03225b"
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

export default ModalTwo
