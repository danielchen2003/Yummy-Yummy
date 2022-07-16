import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

export default function Search() {
  const [input, setInput] = useState("")
  const navigate = useNavigate() //hood 挂钩上搜索框内的东西直接上到地址栏 比如搜素noodle enter  地址栏直接到serached/noodle
  const sumbitHnadler = (e) => {
    console.log("hey")
    e.preventDefault()
    navigate(`/searched/${input}`)
  }

  return (
    <FormStyle onSubmit={sumbitHnadler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Please search recipe here"
        />
      </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`
