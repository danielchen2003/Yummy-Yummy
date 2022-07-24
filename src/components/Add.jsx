import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material"
import { Box } from "@mui/system"

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))
const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="New Recipe"
        sx={{
          position: "fixed",
          bottom: 15,
          left: { xs: "calc(50% - px)", md: 89 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={410}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create New Recipe
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Linfeng
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static-title"
            multiline
            rows={3}
            placeholder="Title Of The Recipt?"
            variant="standard"
          />
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static-img"
            multiline
            rows={3}
            placeholder="Image URL"
            variant="standard"
          />
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static-instructions"
            multiline
            rows={3}
            placeholder="Instructions Of The Recipt?"
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  )
}

export default Add
