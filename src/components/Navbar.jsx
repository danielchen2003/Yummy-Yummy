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
} from "@mui/material"
import { useState } from "react"
import React from "react"
import PetsRoundedIcon from "@mui/icons-material/PetsRounded"
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded"
import { padding } from "@mui/system"
// import Badge from "@mui/material/Badge"
import { Mail, Notifications, Pets } from "@mui/icons-material"
import Button from "@mui/material/Button"
import SearchKeyWords from "./SearchKeyWords"

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f04328",
  })

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

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <FoodBankRoundedIcon fontSize="large"></FoodBankRoundedIcon> Yummy
          Yummy
        </Typography>

        <FoodBankRoundedIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        ></FoodBankRoundedIcon>
        {/* <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search> */}
        <Box>
          <SearchKeyWords />
        </Box>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
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
