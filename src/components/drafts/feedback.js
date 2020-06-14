import React from "react"
import { css, Global, ClassNames } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../layout"
import Exhibition from "../images/background.png"
import ScrollContainer from "react-indiana-drag-scroll"
import "bootstrap/dist/css/bootstrap.min.css"
import FeedbackModal from "../components/FeedbackModal"

const Image = styled.img`
  max-width: none;
  width: auto;
  max-height: 90vh;
  margin-bottom: 0;
  display: block;
`

const IndexPage = () => (
  <Layout>
    <ScrollContainer
      css={css`
        max-height: 90vh;
        max-width: none;
        display: block;
        font-size: 0;
        .button-viewer-container {
          display: none;
        }
      `}
      style={{ height: "90vh" }}
    >
      <FeedbackModal />
      <div
        css={css`
          position: relative;
          display: inline-block;
        `}
      >
        <Image src={Exhibition} alt="" />
      </div>
    </ScrollContainer>
  </Layout>
)

export default IndexPage
