import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal } from "react-bootstrap"
import BoardOne from "../images/Asset 6.png"

const ModalFive = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        css={css`
          position: absolute;
          top: 17.4%;
          left: 57.75%;
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
        5
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <img src={BoardOne} alt="" />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalFive
