import Pages from "./pages/Pages"
import Category from "./components/Category"
import { BrowserRouter, Link } from "react-router-dom"
// import Search from "./components/Search"
import styled from "styled-components"
import { GiKnifeFork } from "react-icons/gi"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { createTheme, Stack, ThemeProvider, Paper } from "@mui/material"
import React, { useState } from "react"

import Feed from "./components/Feed"
import { Add } from "@mui/icons-material"

export default function App() {
  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#8acedb",
        light: "white",
        dark: "#2e973e",
      },
      secondary: {
        main: "#f04328",
      },
    },
  })

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <BrowserRouter>
            <Navbar></Navbar>
            <Category />
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Sidebar setMode={setMode} mode={mode} />
              <Pages />
            </Stack>
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </div>
  )
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`

// const Nav = styled.div`
//   padding: 4rem 0rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   svg {
//     font-size: 2rem;
//   }
// `
