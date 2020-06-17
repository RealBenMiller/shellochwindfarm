import React, { useState, Fragment, Component } from "react"
import { css } from "@emotion/core"
import { useMachine } from "@xstate/react"
import { Machine } from "xstate"
import { Form, Button } from "react-bootstrap"
import DownloadFile from "../images/feedbackform.pdf"

var initState = "closed"

if (typeof document === !undefined) {
  if (document.URL.indexOf("#click_approved") >= 0) {
    console.log("yes")
    initState = "open"
  }
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
            background-color: #007fc1;
            @media (max-width: 500px) {
              font-size: 10px;
            }
            @media (min-width: 501px) {
              font-size: 16px;
            }
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
      this.OnChangeFour = this.OnChangeFour.bind(this)
      this.OnChangeFourComments = this.OnChangeFourComments.bind(this)
      this.OnChangeFive = this.OnChangeFive.bind(this)
      this.OnChangeSix = this.OnChangeSix.bind(this)
      this.OnChangeSevenP1 = this.OnChangeSevenP1.bind(this)
      this.OnChangeSevenP2 = this.OnChangeSevenP2.bind(this)
      this.OnChangeSevenP3 = this.OnChangeSevenP3.bind(this)
      this.OnChangeSevenP4 = this.OnChangeSevenP4.bind(this)
      this.OnChangeSevenP5 = this.OnChangeSevenP5.bind(this)
      this.OnChangeSevenP6 = this.OnChangeSevenP6.bind(this)
      this.OnChangeSevenN1 = this.OnChangeSevenN1.bind(this)
      this.OnChangeSevenN2 = this.OnChangeSevenN2.bind(this)
      this.OnChangeSevenN3 = this.OnChangeSevenN3.bind(this)
      this.OnChangeSevenN4 = this.OnChangeSevenN4.bind(this)
      this.OnChangeSevenN5 = this.OnChangeSevenN5.bind(this)
      this.OnChangeSevenN6 = this.OnChangeSevenN6.bind(this)
      this.onChangeEight = this.onChangeEight.bind(this)
      this.onChangeName = this.onChangeName.bind(this)
      this.onChangeAddress = this.onChangeAddress.bind(this)
      this.onChangePostcode = this.onChangePostcode.bind(this)

      this.state = {
        OneA: "",
        TwoA: "",
        ThreeA: "",
        FourA: "",
        FourComments: "",
        FiveA: "",
        SixA: "",
        SevenP1A: false,
        SevenP2A: false,
        SevenP3A: false,
        SevenP4A: false,
        SevenP5A: false,
        SevenP6A: false,
        SevenN1A: false,
        SevenN2A: false,
        SevenN3A: false,
        SevenN4A: false,
        SevenN5A: false,
        SevenN6A: false,
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

    OnChangeFour(e) {
      this.setState({ FourA: e.target.value })
    }

    OnChangeFourComments(e) {
      this.setState({ FourComments: e.target.value })
    }

    OnChangeFive(e) {
      this.setState({ FiveA: e.target.value })
    }

    OnChangeSix(e) {
      this.setState({ SixA: e.target.value })
    }

    OnChangeSevenP1(e) {
      this.setState(initialState => ({
        SevenP1A: !initialState.SevenP1A,
      }))
    }

    OnChangeSevenP2(e) {
      this.setState(initialState => ({
        SevenP2A: !initialState.SevenP2A,
      }))
    }

    OnChangeSevenP3() {
      this.setState(initialState => ({
        SevenP3A: !initialState.SevenP3A,
      }))
    }

    OnChangeSevenP4(e) {
      this.setState(initialState => ({
        SevenP4A: !initialState.SevenP4A,
      }))
    }

    OnChangeSevenP5(e) {
      this.setState(initialState => ({
        SevenP5A: !initialState.SevenP5A,
      }))
    }

    OnChangeSevenP6(e) {
      this.setState(initialState => ({
        SevenP6A: !initialState.SevenP6A,
      }))
    }

    OnChangeSevenN1(e) {
      this.setState(initialState => ({
        SevenN1A: !initialState.SevenN1A,
      }))
    }

    OnChangeSevenN2(e) {
      this.setState(initialState => ({
        SevenN2A: !initialState.SevenN2A,
      }))
    }

    OnChangeSevenN3() {
      this.setState(initialState => ({
        SevenN3A: !initialState.SevenN3A,
      }))
    }

    OnChangeSevenN4(e) {
      this.setState(initialState => ({
        SevenN4A: !initialState.SevenN4A,
      }))
    }

    OnChangeSevenN5(e) {
      this.setState(initialState => ({
        SevenN5A: !initialState.SevenN5A,
      }))
    }

    OnChangeSevenN6(e) {
      this.setState(initialState => ({
        SevenN6A: !initialState.SevenN6A,
      }))
    }

    onChangeEight(e) {
      this.setState({ Eight: e.target.value })
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
          FourA: this.userData.FourA,
          FourComments: this.userData.FourComments,
          FiveA: this.userData.FiveA,
          SixA: this.userData.SixA,
          SevenP1A: this.userData.SevenP1A,
          SevenP2A: this.userData.SevenP2A,
          SevenP3A: this.userData.SevenP3A,
          SevenP4A: this.userData.SevenP4A,
          SevenP5A: this.userData.SevenP5A,
          SevenP6A: this.userData.SevenP6A,
          SevenN1A: this.userData.SevenN1A,
          SevenN2A: this.userData.SevenN2A,
          SevenN3A: this.userData.SevenN3A,
          SevenN4A: this.userData.SevenN4A,
          SevenN5A: this.userData.SevenN5A,
          SevenN6A: this.userData.SevenN6A,
          Eight: this.userData.Eight,
          name: this.userData.name,
          address: this.userData.address,
          postcode: this.userData.postcode,
        })
      } else {
        this.setState({
          OneA: "",
          TwoA: "",
          ThreeA: "",
          FourA: "",
          FourComments: "",
          FiveA: "",
          SixA: "",
          SevenP1A: false,
          SevenP2A: false,
          SevenP3A: false,
          SevenP4A: false,
          SevenP5A: false,
          SevenP6A: false,
          SevenN1A: false,
          SevenN2A: false,
          SevenN3A: false,
          SevenN4A: false,
          SevenN5A: false,
          SevenN6A: false,
          Eight: "",
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
              border-left: 2px solid #007fc1;
              h1 {
                font-size: 24px;
                border-bottom: 2px solid #007fc1;
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
            <div
              css={css`
                text-align: center;
                padding: 15px;
                position: sticky;
                top: 0;
                background-color: white;
                border-bottom: 2px solid #007fc1;
              `}
            >
              <Button
                id="close"
                css={css`
                  background-color: #007fc1;
                  margin-left: 20px;
                  @media (max-width: 500px) {
                    font-size: 10px;
                  }
                  @media (min-width: 501px) {
                    font-size: 16px;
                  }
                  a {
                    color: white;
                    text-decoration: none;
                  }
                `}
                onClick={() => {
                  send("CLOSE")
                }}
              >
                Close Form
              </Button>
              <Button
                css={css`
                  background-color: #007fc1;
                  margin-left: 20px;
                  @media (max-width: 500px) {
                    font-size: 10px;
                  }
                  @media (min-width: 501px) {
                    font-size: 16px;
                  }
                  a {
                    color: white;
                    text-decoration: none;
                  }
                `}
              >
                <a href={DownloadFile}>Download this Form</a>
              </Button>
            </div>
            <div
              css={css`
                text-align: center;
                padding-top: 15px;
              `}
            >
              <h1>Have Your Say</h1>
              <h2>Shelloch Wind Farm Proposal</h2>
              <h2>Feedback Form</h2>
              <p>
                Thank you for taking the time to view our consultation materials
                for the proposed Shelloch Wind Farm. We would encourage you to
                provide your feedback on the proposals by completing this short
                questionnaire. You can complete this electronically here or
                return it to us by email or post using the contact details at
                the end of the form.
              </p>
            </div>
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
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Yes
                  </span>
                </label>
                <label>
                  <input
                    name="one"
                    type="radio"
                    value="no"
                    checked={this.state.OneA === "no"}
                    onChange={this.OnChangeOne}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    No
                  </span>
                </label>
                <label>
                  <input
                    name="one"
                    type="radio"
                    value="dk"
                    checked={this.state.OneA === "dk"}
                    onChange={this.OnChangeOne}
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
              {/* Question Four */}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                4. A Community Benefit Fund (as referenced on Exhibition Board
                5) will be created to help fund projects in the local community.
                Do you support the creation of this fund?
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
                    name="Four"
                    type="radio"
                    value="yes"
                    checked={this.state.FourA === "yes"}
                    onChange={this.OnChangeFour}
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
                    name="Four"
                    type="radio"
                    value="no"
                    checked={this.state.FourA === "no"}
                    onChange={this.OnChangeFour}
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
                    name="Four"
                    type="radio"
                    value="dk"
                    checked={this.state.FourA === "dk"}
                    onChange={this.OnChangeFour}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Don't Know
                  </span>
                </label>
                <label>
                  If Yes, what would you like to see the fund used for?
                </label>
                <textarea
                  css={css`
                    display: block;
                    width: 90%;
                    border: solid 1px #007fc1;
                    border-radius: 5px;
                    margin-bottom: 10px;
                  `}
                  name="FourComments"
                  rows="3"
                  required
                  value={this.state.FourComments}
                  onChange={this.OnChangeFourComments}
                />
              </div>

              {/* Question Five */}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                5. Force 9 Energy’s project partner, EDF Renewables, is also
                committed to providing an opportunity for local community groups
                to collectively have up to 10% Community Ownership in the
                Shelloch Wind Farm through a Profit Sharing Agreement. If your
                local group falls within the ‘’Community of interest’’ (as
                referenced on Exhibition Board 6) Would you like to receive
                further information on the Community Investment Opportunity?
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
                    name="Five"
                    type="radio"
                    value="yes"
                    checked={this.state.FiveA === "yes"}
                    onChange={this.OnChangeFive}
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
                    name="Five"
                    type="radio"
                    value="no"
                    checked={this.state.FiveA === "no"}
                    onChange={this.OnChangeFive}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    No
                  </span>
                </label>
                <p>
                  Your capital is at risk if you invest. Investments are not
                  covered by the Financial Services Compensation Scheme. For a
                  further information, please contact Steven Park and a
                  representative from EDF Renewable Community Investment Ltd
                  will contact you.
                </p>
              </div>

              {/* Question Six */}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                6. A previous application for the site was approved for seven
                turbines, but our proposals will reduce this to five more
                productive turbines which will generate significantly more
                renewable energy than the prior consented application. Do you
                support this reduction?
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
                    name="six"
                    type="radio"
                    value="yes"
                    checked={this.state.SixA === "yes"}
                    onChange={this.OnChangeSix}
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
                    name="six"
                    type="radio"
                    value="no"
                    checked={this.state.SixA === "no"}
                    onChange={this.OnChangeSix}
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
                    name="six"
                    type="radio"
                    value="Undecided"
                    checked={this.state.SixA === "u"}
                    onChange={this.OnChangeSix}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Undecided
                  </span>
                </label>
              </div>

              {/* Question Seven */}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                7. Based upon what you have learned today, please tick the box
                (es) below that reflect your views on the Shelloch Wind Farm
                proposals:
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
                <p>
                  Firstly, please tick the box(es) below that best reflect what
                  you consider to be the positives associated with the
                  development:{" "}
                </p>
                <label className="radio">
                  <input
                    name="sevenP1"
                    type="checkbox"
                    value="clean energy for future generations"
                    checked={this.state.SevenP1A}
                    onChange={this.OnChangeSevenP1}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Clean Energy for future generations
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenP2"
                    type="checkbox"
                    value="helping address the climate emergency"
                    checked={this.state.SevenP2A}
                    onChange={this.OnChangeSevenP2}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Helping address the Climate Emergency
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenP3"
                    type="checkbox"
                    value="potential community benefits"
                    checked={this.state.SevenP3A}
                    onChange={this.OnChangeSevenP3}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Potential Community Benefits
                  </span>
                </label>

                <label className="radio">
                  <input
                    name="sevenP4"
                    type="checkbox"
                    value="locally produced energy"
                    checked={this.state.SevenP4A}
                    onChange={this.OnChangeSevenP4}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Locally produced Energy
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenP5"
                    type="checkbox"
                    value="support scottish government's energy strategy targets"
                    checked={this.state.Seven5A}
                    onChange={this.OnChangeSevenP5}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Support Scottish Government's Energy Strategy Targets
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenP6"
                    type="checkbox"
                    value="opportunity for local community groups to invest"
                    checked={this.state.SevenP6A}
                    onChange={this.OnChangeSevenP6}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Opportunity for local community groups to invest
                  </span>
                </label>

                <p>
                  Secondly, please tick the box(es) below that best reflect any
                  concerns you have regarding the proposal:
                </p>
                <label className="radio">
                  <input
                    name="sevenN1"
                    type="checkbox"
                    value="impact on tourism"
                    checked={this.state.SevenN1A}
                    onChange={this.OnChangeSevenN1}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Impact on Tourism
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenN2"
                    type="checkbox"
                    value="access"
                    checked={this.state.SevenN2A}
                    onChange={this.OnChangeSevenN2}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Access Tracks
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenN3"
                    type="checkbox"
                    value="noise"
                    checked={this.state.SevenN3A}
                    onChange={this.OnChangeSevenN3}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Noise
                  </span>
                </label>

                <label className="radio">
                  <input
                    name="sevenN4"
                    type="checkbox"
                    value="impact on roads"
                    checked={this.state.SevenN4A}
                    onChange={this.OnChangeSevenN4}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Impact on Local Roads
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenN5"
                    type="checkbox"
                    value="wildlife"
                    checked={this.state.SevenN5A}
                    onChange={this.OnChangeSevenN5}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Impact on Wildlife
                  </span>
                </label>
                <label className="radio">
                  <input
                    name="sevenN6"
                    type="checkbox"
                    value="visual impact"
                    checked={this.state.SevenN6A}
                    onChange={this.OnChangeSevenN6}
                  />
                  <span
                    css={css`
                      padding-left: 10px;
                    `}
                  >
                    Visual Impact
                  </span>
                </label>
              </div>

              {/* Question Eight*/}
              <label
                css={css`
                  font-weight: bold;
                `}
              >
                8. Do you have any other comments that you wish to raise in
                connection with question 7 or anything else concerning the
                Shelloch proposals?
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
                <textarea
                  css={css`
                    display: block;
                    width: 90%;
                    border: solid 1px #007fc1;
                    border-radius: 5px;
                    margin-bottom: 10px;
                  `}
                  name="eight"
                  rows="3"
                  required
                  value={this.state.Eight}
                  onChange={this.onChangeEight}
                />
              </div>
              <h2
                css={css`
                border-bottom: 2px solid #007fc1;
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
                css={css`
                  display: block;
                  width: 90%;
                  border: solid 1px #007fc1;
                  border-radius: 5px;
                  margin-bottom: 10px;
                `}
                name="name"
                type="name"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.onChangeName}
                required
              />
              <label>Address</label>
              <textarea
                css={css`
                  display: block;
                  width: 90%;
                  border: solid 1px #007fc1;
                  border-radius: 5px;
                  margin-bottom: 10px;
                `}
                name="address"
                placeholder="Enter Address"
                as="textarea"
                rows="3"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
              />
              <label>Post Code</label>
              <input
                css={css`
                  display: block;
                  width: 90%;
                  border: solid 1px #007fc1;
                  border-radius: 5px;
                  margin-bottom: 10px;
                `}
                name="postcode"
                type="postcode"
                placeholder="Enter Post Code"
                required
                value={this.state.postcode}
                onChange={this.onChangePostcode}
              />
              <label>Email Address</label>
              <input
                css={css`
                  display: block;
                  width: 90%;
                  border: solid 1px #007fc1;
                  border-radius: 5px;
                  margin-bottom: 10px;
                `}
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
              <h2
                css={css`
                  border-bottom: 2px solid #007fc1;
                  font-size: 20px;
                  font-family: proxima-nova, sans-serif !important;
                  font-weight: bold;
                  margin-top: 20px;
                `}
              >
                Force 9 Energy Contact Details
              </h2>
              <p>
                For more information or to return your feedback form, you can
                contact us in the following ways:
              </p>
              <p>
                Submit this form by filling it and pressing the submit button
                below. Alternatively you can download the form and email it or
                post it using the details below.
              </p>
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
                  border-bottom: 2px solid #007fc1;
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
              <div
                css={css`
                  text-align: center;
                `}
              >
                <Button
                  css={css`
                    background-color: #007fc1;
                  `}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
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
