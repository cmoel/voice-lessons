import React, { Component, PropTypes }             from "react"

import Sidebar                                     from "../components/Sidebar"

const MainContent = () => {
  return (
    <div className="window-content">
      <Sidebar />
      <div className="pane">...</div>
    </div>
  )
}

export default MainContent
