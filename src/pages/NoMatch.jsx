import React from "react"
// import "../components/css"
import "./nomatch.scss"
import { Box, Container, Stack, Skeleton, styled } from "@mui/material"
import Confetti from "react-confetti"

export default function NoMatch() {
  const Canvas = styled(Box)(({ theme }) => ({
    backgroundImage: `url(https://assets.codepen.io/1538474/star.svg)`,
    height: "100%",
    margin: 0,
  }))
  return (
    <Canvas>
      <Confetti />
      <div class="mars"></div>
      <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
      <div align="center">
        <a class="btn-back" href="/">
          Back to previous page
        </a>
      </div>
      <p class="title">Oh no!!</p>
      <p class="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>

      <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        class="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        class="spaceship"
      />
    </Canvas>
  )
}
