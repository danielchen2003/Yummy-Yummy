import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material"
import { useState } from "react"
// import { makeStyles } from "@material-ui/styles"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"

export default function SearchKeyWords() {
  const [input, setInput] = useState("")

  const navigate = useNavigate() //hood 挂钩上搜索框内的东西直接上到地址栏 比如搜素noodle enter  地址栏直接到serached/noodle
  const sumbitHnadler = (e) => {
    console.log("hey")
    e.preventDefault()
    navigate(`/searched/${input}`)
  }
  // const Search = styled("div")(({ theme }) => ({
  //   backgroundColor: "white",
  //   padding: "0 10px",
  //   borderRadius: theme.shape.borderRadius,
  //   width: "30%",
  // }))
  // const Search = styled("div")(() => ({
  //   backgroundColor: "white",
  //   padding: "0 10px",
  //   // borderRadius: theme.shape.borderRadius,
  //   width: "40%",
  // }))
  // const classes = useStyles()
  //一套壳子就不行了cao
  return (
    <>
      <FormStyle onSubmit={sumbitHnadler}>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Find a Recipe..."
          />
        </div>
      </FormStyle>
    </>
  )
}

// const useStyles = makeStyles((theme) => ({
//   searchOnFocus: {
//     width: "100%",

//     transition: "width .8s",
//   },
//   searchOnBlur: {
//     width: "30%",

//     transition: "width .8s",
//   },
//   searchBar: {
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center", //center vertically
//     backgroundColor: "dimgray",
//   },
//   inputView: {
//     width: "100%",
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     color: "white",
//     backgroundColor: "dimgray",
//     borderWidth: "0",
//     border: "None",
//     width: "90%",
//     transition: "width .8s",
//     "&:focus": { width: "95%", outline: "None" },
//     "&::placeholder": { color: "white" },
//   },
// }))

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    /* background: linear-gradient(35deg, #494949, #313131); */
    font-size: 1.5rem;
    color: #f04328;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 40%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`
