import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button } from "react-bootstrap"

const StartScrolling = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 22%;
        left: 5%;
        max-width: 150px;
        border-radius: 5%;
        padding: 5px;
        background-color: white;
        color: #007fc1;
        font-size: 12px;
        line-height: 14px;
        border: 2px solid #007fc1;

        @media (min-width: 815px) {
          font-size: 18px;
          line-height: 22px;
          padding: 10px;
          max-width: 200px;
        }

        @media (max-width: 400px) {
          font-size: 14px;
          line-height: 22px;
          padding: 10px;

          max-width: 200px;
        }
      `}
    >
      To view the exhibition materials, click, drag or scroll to the right to
      see the boards. Click on the titles of each board to view the content.
      <br></br>
      <br></br>
      Drag the screen to the right to view more. <br></br>
      <br></br>
      <span
        css={css`
          display: block;
          width: 100%;
          text-align: center;
          font-size: 5em;
        `}
      >
        &rarr;
      </span>
    </div>
  )
}

export default StartScrolling
