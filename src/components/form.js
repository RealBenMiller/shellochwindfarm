import React, { Component } from "react"
import { css } from "@emotion/core"
import { Button } from "react-bootstrap"

class OldForm extends React.Component {
  render() {
    return (
      <div>
        <div
          css={css`                
                z-index: 9999;
                display: block;
                background-color: white;
                position: fixed;
                top: 0;
                right: 0px;
                bottom: 0;
                width: 400px;
                font-size: 0.8em;
                overflow-y: scroll;
                border-left: 2px solid lightblue;
                padding-left: 15px;
                padding-top: 10px;
                h1 {
                font-size: 22px;
                border-bottom: 2px solid lightblue;
                font-family: proxima-nova, sans-serif !important;
                font-weight: bold;
                }
                h2 {
                font-size: 20px;
                }
                label{
                  display: block;
                  margin-top: 10px;
                }
                .inputbox{
                  display: block;
                  width: 90%;
                  border: 1px solid lightblue;
                  border-radius: 5px;
                }
                .radio {
                  display: inline-block;
                }
              }
              `}
        >
          <div
            css={css`
              text-align: center;
              padding-bottom: 10px;
            `}
          >
            <button
              css={css`
                margin: 0 auto;
              `}
            >
              Print this Form
            </button>
          </div>
          <h1>Have Your Say</h1>
          <h2>Shelloch Wind Farm Proposal</h2>
          <h2>Feedback Form</h2>
          <p>
            Thank you for taking the time to view our consultation materials for
            the proposed Shelloch Wind Farm. We would encourage you to provide
            your feedback on the proposals by completing this short
            questionnaire. You can complete this electronically here or return
            it to us by email or post using the contact details at the end of
            the form.
          </p>
        </div>
      </div>
    )
  }
}

export default OldForm
