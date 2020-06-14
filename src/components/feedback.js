import React, { useState, Fragment, Component } from "react"
import { css } from "@emotion/core"
import { useMachine } from "@xstate/react"
import { Machine } from "xstate"
import { Form, Button } from "react-bootstrap"

var initState = ""

if (document.URL.indexOf("#click_approved") >= 0) {
  initState = "open"
} else {
  initState = "closed"
}

const openCartAnimation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000)
  })

const closeCartAnimation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000)
  })

const formMachine = Machine({
  id: "form",
  initial: initState,

  states: {
    closed: {
      on: {
        OPEN: "open",
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
        CLOSE: "closed",
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

  const FormButton = () => {
    if (state.matches("open")) {
      return <></>
    }
    if (state.matches("closed")) {
      return (
        <Button
          css={css`
            margin-left: 20px;
          `}
          id="open"
          onClick={() => {
            send("OPEN")
          }}
        >
          Provide Feedback
        </Button>
      )
    }

    if (state.matches("opening")) {
      return <></>
    }

    if (state.matches("closing")) {
      return <></>
    }
  }

  class Feedback extends React.Component {
    userData

    constructor(props) {
      super(props)
      this.OnChangeOne = this.OnChangeOne.bind(this)
      this.OnChangeTwo = this.OnChangeTwo.bind(this)
      this.OnChangeThree = this.OnChangeThree.bind(this)
      this.onChangeName = this.onChangeName.bind(this)
      this.onChangeAddress = this.onChangeAddress.bind(this)
      this.onChangePostcode = this.onChangePostcode.bind(this)

      this.state = {
        OneA: "",
        TwoA: "",
        ThreeA: "",
        name: "",
        address: "",
        phone: "",
      }
    }

    //form Events

    OnChangeOne(e) {
      this.setState({ OneA: e.target.value })
    }

    OnChangeTwo(e) {
      this.setState({ TwoA: e.target.value })
    }

    OnChangeThree(e) {
      this.setState({ ThreeA: e.target.value })
    }

    onChangeName(e) {
      this.setState({ name: e.target.value })
    }

    onChangeAddress(e) {
      this.setState({ address: e.target.value })
    }

    onChangePostcode(e) {
      this.setState({ postcode: e.target.value })
    }

    //React Life Cycle
    componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem("user"))
      if (localStorage.getItem("user")) {
        this.setState({
          OneA: this.userData.OneA,
          TwoA: this.userData.TwoA,
          ThreeA: this.userData.ThreeA,
          name: this.userData.name,
          address: this.userData.address,
          postcode: this.userData.postcode,
        })
      } else {
        this.setState({
          OneA: "",
          TwoA: "",
          ThreeA: "",
          name: "",
          address: "",
          postcode: "",
        })
      }
    }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem("user", JSON.stringify(nextState))
    }

    render() {
      return (
        <div>
          <div
            className={state.matches("open") ? "open" : "hidden"}
            css={css`
              @media (max-width: 600px) {
                width: 100%;
              }

              z-index: 10;
              background-color: white;
              position: fixed;
              top: 0;
              right: 400px;
              bottom: 0;
              width: 500px;
              font-size: 0.8em;
              overflow-y: scroll;
              padding-left: 20px;
              padding-right: 20px;
              border-left: 2px solid lightblue;
              h1 {
                font-size: 22px;
                border-bottom: 2px solid lightblue;
                font-family: proxima-nova, sans-serif !important;
                font-weight: bold;
              }
              h2 {
                font-size: 20px;
              }
            `}
          >
            <style>
              {`
                .open {
                  right: 0px;
                }
                .hidden {
                  right: -500px;
                }
              `}
            </style>
            <Button
              onClick={() => {
                send("CLOSE")
              }}
            >
              Close Form
            </Button>
            <Button>Print this Form</Button>
            <h1>Have Your Say</h1>
            <h2>Shelloch Wind Farm Proposal</h2>
            <h2>Feedback Form</h2>
            <p>
              Thank you for taking the time to view our consultation materials
              for the proposed Shelloch Wind Farm. We would encourage you to
              provide your feedback on the proposals by completing this short
              questionnaire. You can complete this electronically here or return
              it to us by email or post using the contact details at the end of
              the form.
            </p>

            <form data-netlify="true" netlify name="feedbackform" method="POST">
              <input type="hidden" name="form-name" value="feedbackform" />
              <label
                css={css`
                  font-weight: bold;
                  label {
                  }
                `}
              >
                1. Recent lockdown procedures have resulted in less pollution
                and cleaner air. Do you agree that the post-lockdown recovery
                should focus on building a greener and cleaner economy for
                Scotland?
              </label>
              <div
                css={css`
                  label {
                    display: inline-block;
                    padding-left: 10px;
                    padding-right: 10px;
                  }
                `}
              >
                <label>
                  <input
                    name="one"
                    type="radio"
                    value="yes"
                    checked={this.state.OneA === "yes"}
                    onChange={this.OnChangeOne}
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    name="one"
                    type="radio"
                    value="no"
                    checked={this.state.OneA === "no"}
                    onChange={this.OnChangeOne}
                  />
                  <span>No</span>
                </label>
                <label>
                  <input
                    name="one"
                    type="radio"
                    value="dk"
                    checked={this.state.OneA === "dk"}
                    onChange={this.OnChangeOne}
                  />
                  <span>Don't Know</span>
                </label>
              </div>

              {/* QUESTION TWO */}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                2. On a scale of 1-5 how concerned are you about the potential
                effects of climate change, 1 being unconcerned and 5 being very
                concerned?
              </label>
              <div
                css={css`
                  label {
                    display: inline-block;
                    padding-left: 10px;
                    padding-right: 10px;
                  }
                `}
              >
                <label className="radio">
                  <input
                    name="two"
                    type="radio"
                    value="1"
                    checked={this.state.TwoA === "1"}
                    onChange={this.OnChangeTwo}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    1
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="two"
                    type="radio"
                    value="2"
                    checked={this.state.TwoA === "2"}
                    onChange={this.OnChangeTwo}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    2
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="two"
                    type="radio"
                    value="3"
                    checked={this.state.TwoA === "3"}
                    onChange={this.OnChangeTwo}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    3
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="two"
                    type="radio"
                    value="4"
                    checked={this.state.TwoA === "4"}
                    onChange={this.OnChangeTwo}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    4
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="two"
                    type="radio"
                    value="5"
                    checked={this.state.TwoA === "5"}
                    onChange={this.OnChangeTwo}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    5
                  </span>
                </label>
              </div>
              {/* Question Three */}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                3. Do you consider that Onshore Wind should play an important
                role in addressing the Climate Emergencies which were declared
                by the Scottish Government and the Stirling Council in 2019?
              </label>
              <div
                css={css`
                  label {
                    display: inline-block;
                    padding-left: 10px;
                    padding-right: 10px;
                  }
                `}
              >
                <label className="radio">
                  <input
                    name="three"
                    type="radio"
                    value="yes"
                    checked={this.state.ThreeA === "yes"}
                    onChange={this.OnChangeThree}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Yes
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="three"
                    type="radio"
                    value="no"
                    checked={this.state.ThreeA === "no"}
                    onChange={this.OnChangeThree}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    No
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="three"
                    type="radio"
                    value="dk"
                    checked={this.state.ThreeA === "dk"}
                    onChange={this.OnChangeThree}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Don't Know
                  </span>
                </label>
              </div>
              <h2
                css={css`
                border-bottom: 2px solid lightblue;
                font-size: 20px;
                font-family: proxima-nova, sans-serif !important;
                font-weight: bold;
              }
            `}
              >
                Your Contact Details
              </h2>
              <label>Name</label>
              <input
                name="name"
                type="name"
                value={this.state.name}
                onChange={this.onChangeName}
                required
              />
              <label>Address</label>
              <textarea
                name="address"
                as="textarea"
                rows="3"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
              />
              <label>Post Code</label>
              <input
                name="postcode"
                type="postcode"
                required
                value={this.state.postcode}
                onChange={this.onChangePostcode}
              />
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
              <h2
                css={css`
                  border-bottom: 2px solid lightblue;
                  font-size: 20px;
                  font-family: proxima-nova, sans-serif !important;
                  font-weight: bold;
                `}
              >
                Force 9 Energy Contact Details
              </h2>
              <p>
                For more information or to return your feedback form, you can
                contact us in the following ways:
              </p>
              <p>Submit this form</p>
              <p>
                Email:{" "}
                <a href="mailto:steven@libertonecomms.co.uk">
                  steven@libertyonecomms.co.uk
                </a>
              </p>
              <p>
                Phone: 0122 4060 326 (during office hours, 9am-5pm, Monday to
                Friday)
              </p>
              <p>Post:</p>
              <p>Force 9 Energy, c/o Liberty One Communications</p>
              <p>The Silver Fin Building</p>
              <p>455 Union Street</p>
              <p>Aberdeen, AB11 6DB</p>

              <h4
                css={css`
                  border-bottom: 2px solid lightblue;
                  font-size: 20px;
                `}
              >
                Data Protection
              </h4>
              <p>
                In submitting this form, you consent to us storing and
                processing your data, such as your name, home address and
                telephone numbers. This personal data will only be stored and
                processed for the purpose of compliance with our legal and
                regulatory obligations and only accessible by a limited number
                of employees who need to do so to carry out the requirements of
                their role. We will also securely delete or destroy your data as
                soon as we no longer need to store it. We are committed to
                safeguarding your privacy and to complying in full with the
                General Data Protection Regulation (GDPR) and our own internal
                Privacy Policy.
              </p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      <FormButton />
      <Feedback />
    </>
  )

  //   const props = useSpring({ transfrom: "translateX(0)" })

  //   if (state.matches("error")) {
  //     return (
  //       <p>
  //         error <button onClick={() => send("RESET")}>RESET</button>
  //       </p>
  //     )
  //   }

  //   if (state.matches("closing")) {
  //     return <p>closing</p>
  //   }

  //   if (state.matches("open")) {
  //     return (
  //       <p>
  //         Open <button onClick={() => send("CLOSE")}>CLOSE</button>{" "}
  //       </p>
  //     )
  //   }

  //   if (state.matches("closed")) {
  //     return (
  //       <p>
  //         closed <button onClick={() => send("OPEN")}>OPEN</button>{" "}
  //       </p>
  //     )
  //   }
}

export default FeedbackForm
