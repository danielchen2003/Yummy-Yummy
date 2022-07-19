import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Search,
  alpha,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { useState } from "react"
import React from "react"
import PetsRoundedIcon from "@mui/icons-material/PetsRounded"
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded"
import { padding } from "@mui/system"
import BookmarksIcon from "@mui/icons-material/Bookmarks"

import { Mail, Notifications, Pets } from "@mui/icons-material"
import Button from "@mui/material/Button"
// import SearchKeyWords from "./SearchKeyWords"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate, Link } from "react-router-dom"
import PrimarySearchBar from "./Seachbar"

export default function Navbar({ darkTheme }) {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    // backgroundColor: darkTheme.palette.primary.dark,
  })
  // darkTheme.palette.primary.dark
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }))

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }))
  const logoDiv = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }))

  const [open, setOpen] = useState(false)

  // const [input, setInput] = useState("")

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Icons>
          <FoodBankRoundedIcon
            margin="0"
            p="0"
            fontSize="large"
          ></FoodBankRoundedIcon>
          <Typography
            fontFamily="Source Serif Pro"
            alignContent="center"
            justifyContent="center"
            gutterBottom={false}
            variant="h3"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Yummy
          </Typography>
        </Icons>

        <FoodBankRoundedIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        ></FoodBankRoundedIcon>
        {/* <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search> */}
        <PrimarySearchBar></PrimarySearchBar>

        <Icons>
          <Badge badgeContent={7} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/favorite">
              {/* navigate(`/searched/${input}`) */}
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Linfeng</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
{
  /* <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <Typography variant="span">Lin</Typography>
        </UserBox> */
}
