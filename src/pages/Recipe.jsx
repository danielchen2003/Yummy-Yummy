import styled from "styled-components"
import { useState, useEffect } from "react"
import React from "react"
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { useParams } from "react-router-dom"
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
} from "@mui/material"

export default function Recipe({ favorite, setFavorite }) {
  let params = useParams()
  console.log(params.name)
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const detailData = await data.json()
    console.log(data)
    setDetails(detailData)
  }
  useEffect(() => {
    fetchDetails()
  }, [params.name])

  //加入喜欢
  //如果选中那么久把他标记为 favoriteitem
  function handleAddToFavorite() {
    const newFavorite = [...favorite, details]
    setFavorite(newFavorite) //和之前的obj组合起来
    localStorage.setItem("Favorite", JSON.stringify(newFavorite)) //放入本地
    console.log(favorite)
  }

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img loading="lazy" src={details.image} alt="recipe image" />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              onChange={handleAddToFavorite}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            {/* <Typography
             
              fontFamily="Source Serif Pro"
              alignContent="center"
              justifyContent="center"
              gutterBottom={false}
              variant="h2"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Yummy
            </Typography> */}
            {/* <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>{details.summary}</Typography> */}
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
            <h3>Estimated cooking time: {details.readyInMinutes}</h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  a {
    text-decoration: none;
    color: #257bb9;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    font-family: roboto;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-family: roboto;
  }
  ul {
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.div`
  margin-left: 10rem;
`
