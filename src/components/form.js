import React, { Component } from "react"
import { css } from "@emotion/core"
import { Button } from "react-bootstrap"

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

          <form data-netlify="true" name="feedback" method="post">
            <input type="hidden" name="form-name" value="feedback" />

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
              className="inputbox"
              name="name"
              type="name"
              value={this.state.name}
              onChange={this.onChangeName}
              required
            />
            <label>Address</label>
            <textarea
              className="inputbox"
              name="address"
              as="textarea"
              rows="3"
              required
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
            <label>Post Code</label>
            <input
              className="inputbox"
              name="postcode"
              type="postcode"
              required
              value={this.state.postcode}
              onChange={this.onChangePostcode}
            />
            <label>Email Address</label>
            <input
              className="inputbox"
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
              In submitting this form, you consent to us storing and processing
              your data, such as your name, home address and telephone numbers.
              This personal data will only be stored and processed for the
              purpose of compliance with our legal and regulatory obligations
              and only accessible by a limited number of employees who need to
              do so to carry out the requirements of their role. We will also
              securely delete or destroy your data as soon as we no longer need
              to store it. We are committed to safeguarding your privacy and to
              complying in full with the General Data Protection Regulation
              (GDPR) and our own internal Privacy Policy.
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Feedback
