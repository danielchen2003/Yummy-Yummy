import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"

export default function Searched() {
  const [searchedRecipts, setSearchedRecipts] = useState([])

  let params = useParams()

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const recipes = await data.json()
    setSearchedRecipts(recipes.results)
  }
  useEffect(() => {
    getSearched(params.search) //这个钩子是和pagenage关键词挂钩的 13 line path="/searched/:search"
  }, [params.search])

  return (
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
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`
