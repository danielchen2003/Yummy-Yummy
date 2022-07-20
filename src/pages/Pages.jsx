import React, { useState, useEffect } from "react"
import Home from "./Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Cuisine from "./Cuisine"
import Searched from "./Searched"
import NoMatch from "./NoMatch"
import Recipe from "./Recipe"
import { AnimatePresence } from "framer-motion"
import { Box } from "@mui/material"
import Favorite from "../components/Favorite"
import examplePost from "../data"

export default function Pages() {
  const location = useLocation()
  const [favorite, setFavorite] = useState([])
  const checkFavorite = localStorage.getItem("Favorite")
  const getFavorite = () => {
    if (checkFavorite) {
      const faverateRecipe = JSON.parse(checkFavorite)
      setFavorite([...examplePost, ...faverateRecipe])
      console.log(favorite)
    } else {
      setFavorite([])
    }
  }
  useEffect(() => {
    getFavorite()
  }, [])

  return (
    <Box flex={7.5} p={2}>
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route
            path="/recipe/:name"
            element={<Recipe favorite={favorite} setFavorite={setFavorite} />}
          />
          <Route
            path="/favorite"
            element={<Favorite favorite={favorite} setFavorite={setFavorite} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AnimatePresence>
    </Box>
  )
}
