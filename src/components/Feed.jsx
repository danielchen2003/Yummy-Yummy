import { Box, Stack, Skeleton } from "@mui/material"
import React, { useState, useEffect } from "react"
import Post from "./Post"
import examplePost from "../data"

const Feed = () => {
  const [loading, setLoading] = useState(true)
  const [newPost, setNewPost] = useState(examplePost)
  // useEffect(() => {
  //   getNewPost()
  // }, [])
  // const getNewPost = async () => {
  // const check = localStorage.getItem("newPost")
  // if (check) {
  //   setNewPost(JSON.parse(check))
  // } else {
  //   setLoading(true)
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7`
  //   )

  // const data = await api.json()
  // setLoading(false)
  // localStorage.setItem("newPost", JSON.stringify(data.recipes))
  //     setNewPost(data.recipes)
  //     console.log(data)
  //   }
  // }
  setTimeout(() => setLoading(false), 3000)

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <h1>Lastest Post</h1>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {newPost.map((recipe) => {
            return <Post recipe={recipe} key={recipe.id}></Post>
          })}
        </>
      )}
    </Box>
  )
}

export default Feed
