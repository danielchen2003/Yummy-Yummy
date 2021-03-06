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
    <Card sx={{ margin: 5 }} key={props.recipe.id}>
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
      <Link to={`/recipe/${props.recipe.id}`} textDecoration="none">
        <CardMedia
          component="img"
          height="20%"
          image={props.recipe.image}
          alt={props.recipe.title}
        />
      </Link>
      <CardContent>
        <Typography variant="h4" color="text.secondary">
          {props.recipe.title}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {props.recipe.instructions}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<Favorite sx={{ color: "red" }} />}
            checkedIcon={<Favorite sx={{ color: "blue" }} />}
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
