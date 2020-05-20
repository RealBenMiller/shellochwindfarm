import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"
import BoardOne from "../images/Asset 8.png"

const ModalSeven = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 23%;
          left: 79.45%;
          height: 45px;
          width: 45px;
          border-radius: 50%;
          background-color: white;
          color: blue;
          font-size: 22px;
          line-height: 22px;
        `}
        onClick={handleShow}
      >
        7
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <img src={BoardOne} alt="" />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSeven
