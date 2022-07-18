import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@mui/material"
// import "./index.css"
import App from "./App"
import { theme } from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
