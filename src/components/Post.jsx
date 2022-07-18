import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

export default function Post(props) {
  return (
    <Card sx={{ margin: 5 }}>
      <Link to={`/recipe/${props.recipe.id}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#f04328" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Linfeng Chen"
          subheader="September 01, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image={props.recipe.image}
          alt={props.recipe.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.recipe.title}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

// <SplideSlide key={recipe.id}>
//   <Card>
//     <Link to={`/recipe/${recipe.id}`}>
//       <p>{recipe.title}</p>
//       <img src={recipe.image} atl={recipe.title} />
//       <Gradient />
//     </Link>
//   </Card>
// </SplideSlide>
