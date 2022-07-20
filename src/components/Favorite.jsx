import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { CardActions, Checkbox, IconButton } from "@mui/material"
import { FaShare } from "react-icons/fa"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box, Stack, Skeleton } from "@mui/material"
import {
  Favorite as Favoriteicon,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material"

// localStorage.setItem("Favorite", JSON.stringify(Favorite))

export default function Favorite({ favorite, setFavorite }) {
  // useEffect(() => {
  //   const updateFavorite = favorite
  //   localStorage.setItem("Favorite", JSON.stringify(updateFavorite))
  // }, [favorite])
  const [loading, setLoading] = useState(true)

  function deleteOnClick(id) {
    setFavorite((prev) =>
      prev.filter((favoriteRecipt) => favoriteRecipt.id != id)
    )
  }
  setTimeout(() => setLoading(false), 500)

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
        <>
          <h1>My Favorites</h1>
          <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {favorite.map((item) => {
              return (
                <Card key={item.id}>
                  <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                  </Link>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <Checkbox icon={<Favoriteicon sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton
                      onClick={() => deleteOnClick(item.id)}
                      aria-label="Delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              )
            })}
          </Grid>
        </>
      )}
    </div>
  )
}

{
  /* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions> */
}

const Grid = styled(motion.div)`
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

    max-height: 325px;
  }
  a {
    color: #f04328;
    text-decoration: none;
  }
  h4 {
    color: #f04328;
    text-align: center;
    padding: 1rem;
  }
`
// const initialState = {
//   watchlist: localStorage.getItem("watchlist")
//     ? JSON.parse(localStorage.getItem("watchlist"))
//     : [],
//   watched: localStorage.getItem("watched")
//     ? JSON.parse(localStorage.getItem("watched"))
//     : [],
// };

// // create context
// export const GlobalContext = createContext(initialState);

// // provider components
// export const GlobalProvider = (props) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   useEffect(() => {
//     localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
//     localStorage.setItem("watched", JSON.stringify(state.watched));
//   }, [state]);

//   // actions
//   const addMovieToWatchlist = (movie) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
//   };

//   const removeMovieFromWatchlist = (id) => {
//     dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
//   };

//   const addMovieToWatched = (movie) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
//   };

//   const moveToWatchlist = (movie) => {
//     dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
//   };

//   const removeFromWatched = (id) => {
//     dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
//   };

const middleH1 = styled.h1`
  text-align: center;
`
