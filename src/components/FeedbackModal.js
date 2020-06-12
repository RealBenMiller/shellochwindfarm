import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Button, Modal, Form } from "react-bootstrap"

const FeedbackModal = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Modal
        css={css`
          margin-top: 10vh;
          font-size: 0.8em;
          .modal-backdrop {
            background-color: #efefef;
          }
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
        size="lg"
        show={show}
      >
        <Modal.Body
          css={css`
            padding: 50px;
          `}
        >
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

          <Form data-netlify="true" netlify name="feedbackform" method="POST">
            <input type="hidden" name="form-name" value="feedbackform" />
            <Form.Group controlId="QuestionOne">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                1. Recent lockdown procedures have resulted in less pollution
                and cleaner air. Do you agree that the post-lockdown recovery
                should focus on building a greener and cleaner economy for
                Scotland?
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="One"
                    inline
                    label="Yes"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="One"
                    inline
                    label="No"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="One"
                    inline
                    label="Don't Know"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="QuestionTwo">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                2. On a scale of 1-5 how concerned are you about the potential
                effects of climate change, 1 being unconcerned and 5 being very
                concerned?
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Two"
                    inline
                    label="1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Two"
                    inline
                    label="2"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Two"
                    inline
                    label="3"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Two"
                    inline
                    label="4"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Two"
                    inline
                    label="5"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="QuestionThree">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                3. Do you consider that Onshore Wind should play an important
                role in addressing the Climate Emergencies which were declared
                by the Scottish Government and the Stirling Council in 2019?
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Three"
                    inline
                    label="Yes"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Three"
                    inline
                    label="No"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Three"
                    inline
                    label="Don't Know"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="QuestionFour">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                4. A Community Benefit Fund (as referenced on Exhibition Board
                5) will be created to help fund projects in the local community.
                Do you support the creation of this fund?
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Four"
                    inline
                    label="Yes"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Four"
                    inline
                    label="No"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Four"
                    inline
                    label="Don't Know"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
              <Form.Label>
                If Yes, what would you like to see the fund used for?
              </Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <Form.Group controlId="QuestionFive">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                5. Force 9 Energy’s project partner, EDF Renewables, is also
                committed to providing an opportunity for local community groups
                to collectively have up to 10% Community Ownership in the
                Shelloch Wind Farm through a Profit Sharing Agreement. If your
                local group falls within the ‘’Community of interest’’ (as
                referenced on Exhibition Board 6), would you like to receive
                further information on the Community Investment Opportunity?
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Five"
                    inline
                    label="Yes"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Five"
                    inline
                    label="No"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
              <Form.Label>
                Your capital is at risk if you invest. Investments are not
                covered by the Financial Services Compensation Scheme. For a
                full risk warning, please contact Steven Park and a
                representative from EDF Renewable Community Investment Ltd will
                contact you. EDF Renewables is a trading name of EDF Renewables
                Community Investment Limited which is an appointed
                representative of Resolution Compliance Limited which is
                authorised and regulated by the Financial Conduct Authority
                (FRN:574048)
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="QuestionSix">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                6. A previous application for the site was approved for seven
                turbines, but our proposals will reduce this to five more
                productive turbines which will generate significantly more
                renewable energy than the prior consented application. Do you
                support this reduction?
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Six"
                    inline
                    label="Yes"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Six"
                    inline
                    label="No"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Six"
                    inline
                    label="Don't Know"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="QuestionSeven">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                7. Based upon what you have learned today, please tick the box
                (es) below that reflect your views on the Shelloch Wind Farm
                proposals:
              </Form.Label>
              <Form.Label>
                Firstly, please tick the box(es) below that best reflect what
                you consider to be the{" "}
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  positives
                </span>{" "}
                associated with the development:
              </Form.Label>
              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Seven-a"
                    label="Clean Energy for Future Generations"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Seven-a"
                    label="Helping Address the Climate Emergency"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Seven-a"
                    label="Potential Community Benefits"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Seven-a"
                    label="Locally Produced Energy"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Seven-a"
                    label="Support Scottish Government's Energy Strategy Targets"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Seven-a"
                    label="Opportunity for Local Community Groups to Invest"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
              <Form.Label>
                Secondly, please tick the box(es) below that best reflect any{" "}
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  concerns
                </span>{" "}
                you have regarding the proposals:
              </Form.Label>

              {["radio"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    name="Seven-b"
                    label="Impact on Tourism"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    name="Seven-b"
                    label="Access Tracks"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    name="Seven-b"
                    label="Noise"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Seven-b"
                    label="Impact on Local Roads"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Seven-b"
                    label="Impact on Wildlife"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    name="Seven-b"
                    label="Visual Impact"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="QuestionEight">
              <Form.Label
                css={css`
                  font-weight: bold;
                `}
              >
                8. Do you have any other comments that you wish to raise in
                connection with question 7 or anything else concerning the
                Shelloch proposals?
              </Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <p>
              Please note that any comments made to Force 9 Energy are not
              representations to the planning authority. Once Force 9 Energy and
              their project partner, EDF Renewables, submits a planning
              application, there will be an opportunity to make such
              representations on that application to the planning authority.
            </p>
            <Form.Group controlId="ContactDetails">
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
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" required />
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Enter Address"
                required
              />
              <Form.Label>Post Code</Form.Label>
              <Form.Control
                type="postcode"
                placeholder="Enter Postcode"
                required
              />
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
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
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FeedbackModal
