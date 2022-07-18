import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material"
import React from "react"
// import { useNavigate } from "react-router-dom"
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded"
import SetMealIcon from "@mui/icons-material/SetMeal"
import LocalBarIcon from "@mui/icons-material/LocalBar"
import DinnerDiningIcon from "@mui/icons-material/DinnerDining"
import KebabDiningIcon from "@mui/icons-material/KebabDining"
import IcecreamIcon from "@mui/icons-material/Icecream"
import RamenDiningRoundedIcon from "@mui/icons-material/RamenDiningRounded"
// import BeefIcon from "../icons/meat.png"
import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill"
import EggAltIcon from "@mui/icons-material/EggAlt"
import SpaIcon from "@mui/icons-material/Spa"

export default function Sidebar({ mode, setMode }) {
  // const navigate = useNavigate()
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <Home fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/ice cream">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <IcecreamIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Ice Cream" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/kebab">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <KebabDiningIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Kebab" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/chicken">
              <ListItemIcon>
                <FlutterDashIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Chicken Recipes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/drink">
              <ListItemIcon>
                <LocalBarIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/seafood">
              <ListItemIcon>
                <SetMealIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Sea Food" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/vegetarian">
              <ListItemIcon>
                <SpaIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Vegetarian" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/beef">
              <ListItemIcon>
                <EggAltIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Beef Recipes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/lamb">
              <ListItemIcon>
                <OutdoorGrillIcon icon="fa-regular fa-steak" />
              </ListItemIcon>
              <ListItemText primary="Lamb Recipes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/pizza">
              <ListItemIcon>
                <LocalPizzaRoundedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Pizza" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/searched/noodle">
              <ListItemIcon>
                <RamenDiningRoundedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Noodle" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight fontSize="large" />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
