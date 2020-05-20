import React from "react"
import { css, Global, ClassNames } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Exhibition from "../images/exhibition.png"
import ScrollContainer from "react-indiana-drag-scroll"
import "bootstrap/dist/css/bootstrap.min.css"
import ModalOne from "../components/modal1"
import ModalTwo from "../components/modal2"
import ModalThree from "../components/modal3"
import ModalFour from "../components/modal4"
import ModalFive from "../components/modal5"
import ModalSix from "../components/modal6"
import ModalSeven from "../components/modal7"
import ModalEight from "../components/modal8"

const Image = styled.img`
  max-width: none;
  width: auto;
  height: 100vh;
  margin-bottom: 0;
  display: block;
`

const IndexPage = () => (
  <Layout>
    <ScrollContainer
      css={css`
        min-height: 100vh;
        max-width: none;
        display: block;
        font-size: 0;
      `}
      style={{ height: "100vh" }}
    >
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
      </div>
    </ScrollContainer>
  </Layout>
)

export default IndexPage
