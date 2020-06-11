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
        `}
        size="lg"
        show={show}
      >
        <Modal.Body closeButton>
          <h1>Have Your Say</h1>
          <h2>Shelloch Wind Farm Proposal</h2>
          <h2>Feedback Form</h2>
          <p>
            Thank you for taking the time to view our consultation materials for
            the proposed Shelloch Wind Farm. We would encourage you to provide
            your feedback on the proposals by completing this short
            questionnaire. You can complete this electronically on our project
            webpage (www.force9energy.com/projects/current/shelloch) or return
            it to us by email or post using the contact details at the end of
            the form.
          </p>
          <Form>
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
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FeedbackModal
