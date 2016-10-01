import React from "react"

import MainContent from "./MainContent"
import Footer from "../components/Footer"

require("../index.scss")

const App = () => {
  return (
    <div className="window">
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
