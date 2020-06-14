import React, { useState, Fragment, Component } from "react"
import { css } from "@emotion/core"
import { useMachine } from "@xstate/react"
import { Machine } from "xstate"
import Feedback from "../components/form"
import { Button } from "react-bootstrap"

const openCartAnimation = () =>
  new Promise((resolve, reject) => {
    resolve(true)
  })

const closeCartAnimation = () =>
  new Promise((resolve, reject) => {
    resolve(true)
  })

const formMachine = Machine({
  id: "form",
  initial: "closed",

  states: {
    closed: {
      on: {
        OPEN: "opening",
      },
    },
    opening: {
      invoke: {
        src: openCartAnimation,
        onDone: "open",
        onError: "error",
      },
    },
    open: {
      on: {
        CLOSE: "closing",
      },
    },
    closing: {
      invoke: {
        src: closeCartAnimation,
        onDone: "closed",
        onError: "error",
      },
    },
    error: {
      on: {
        RESET: "closed",
      },
    },
  },
})

const FeedbackForm = () => {
  const [state, send] = useMachine(formMachine)

  const FormWrapper = () => (
    <div
      css={css`
        display: block;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
      `}
    >
      <Feedback />
    </div>
  )

  const FormButton = () => {
    if (state.matches("open")) {
      return (
        <>
          <Button
            css={css`
              margin-left: 50px;
            `}
            onClick={() => {
              send("CLOSE")
            }}
          >
            Hide Form
          </Button>
          <FormWrapper />
        </>
      )
    }
    if (state.matches("closed")) {
      return (
        <>
          <Button
            css={css`
              margin-left: 50px;
            `}
            onClick={() => {
              send("OPEN")
            }}
          >
            Show Form
          </Button>
        </>
      )
    }

    if (state.matches("opening")) {
      return <></>
    }

    if (state.matches("closing")) {
      return <></>
    }
  }

  return (
    <>
      <FormButton />
    </>
  )
}

export default FeedbackForm
