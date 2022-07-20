import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { Box, Stack, Skeleton } from "@mui/material"

export default function Searched() {
  const [searchedRecipts, setSearchedRecipts] = useState([])
  const [loading, setLoading] = useState(false)

  let params = useParams()

  const getSearched = async (name) => {
    setLoading(true)
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    console.log(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const recipes = await data.json()
    setSearchedRecipts(recipes.results)
    setLoading(false)
  }
  useEffect(() => {
    getSearched(params.search) //这个钩子是和pagenage关键词挂钩的 13 line path="/searched/:search"
  }, [params.search])

  return (
    <div>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <Grid>
          {searchedRecipts.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt=""></img>
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            )
          })}
        </Grid>
      )}
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  /* grid-template-rows: 50px 50px; */
  grid-gap: 3rem;
`

/* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem; */
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    color: #f04328;
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`
