import React, { Component, PropTypes }             from "react"

import Header                                      from "../components/Header"
import MainContent                                 from "./MainContent"

require("../index.scss")

const App = () => {
  return (
    <div className="window">
      <Header />
      <MainContent />
    </div>
  )
}

export default App
