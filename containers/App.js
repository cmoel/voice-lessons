import React from "react"

import Header from "../components/Header"
import MainContent from "./MainContent"
import Footer from "../components/Footer"

require("../index.scss")

const App = () => {
  return (
    <div className="window">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
