import React, { useState } from "react"
import { jsx, css, Global } from "@emotion/core"
import { Carousel, Modal, Form, Button } from "react-bootstrap"

const StoryMapCarousel = props => {
  const [index, setIndex] = useState(props.number)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel
      css={css`
        .carousel-indicators {
          display: none;
        }
        padding-top: 40px;
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(100%);
          &before:: {
            content: "Next";
          }
        }
        .carousel-control-prev,
        .carousel-control-next {
          bottom: 100%;
          .sr-only {
            display: inline-block;
            width: 30px;
            height: 20px;
            padding-top: 15px;
            margin: 0 auto;
            overflow: visible;
            white-space: nowrap;
            border: 0;
            color: black;
            clip: auto;
          }
        }
      `}
      pause={"hover"}
      interval={500000}
      autoplay={false}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/783e8eda99d94acd8b7b22ab731c115d"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/9f9c0cdeff284d52a0d38413fe03225b"
          frameborder="0"
          css={css`
            position: relative;
            margin-left: 7.5%;
            width: 85%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/0302c6976d764ab495892b0a6413c569"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/11c755611d6845c8a623827db26fdd62"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/39a5c698e5e14272bee8f2a2ca475181"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/99af2e4040f94fe4add0c8eb6ff822c5"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/8bdd8fc474f44c98a42a392f9587dd74"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/6ab4258b3e3e4789a30a9732e9e8938f"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>

      <Carousel.Item>
        <iframe
          src="https://storymaps.arcgis.com/stories/cc5da35cab6c457f8c59ffd1d58bb7c1"
          frameborder="0"
          css={css`
            position: relative;
            width: 100%;
            min-height: 500px;
          `}
        ></iframe>
      </Carousel.Item>
    </Carousel>
  )
}

export default StoryMapCarousel
