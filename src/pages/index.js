import React from "react"
import { css, Global, ClassNames } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Exhibition from "../images/background.png"
import ScrollContainer from "react-indiana-drag-scroll"
import "bootstrap/dist/css/bootstrap.min.css"
import WelcomeModal from "../components/welcomeModal"
import ModalOne from "../components/ModalOne"
import ModalTwo from "../components/ModalTwo"
import ModalThree from "../components/ModalThree"
import ModalFour from "../components/ModalFour"
import ModalFive from "../components/ModalFive"
import ModalSix from "../components/ModalSix"
import ModalSeven from "../components/ModalSeven"
import ModalEight from "../components/ModalEight"
import ModalNine from "../components/ModalNine"

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
      <WelcomeModal />
      <div
        css={css`
          position: relative;
          display: inline-block;
        `}
      >
        <Image src={Exhibition} alt="" />
        <ModalOne />
        <ModalTwo />
        <ModalThree />
        <ModalFour />
        <ModalFive />
        <ModalSix />
        <ModalSeven />
        <ModalEight />
        <ModalNine />
      </div>
    </ScrollContainer>
  </Layout>
)

export default IndexPage
