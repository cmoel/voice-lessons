import React from "react"

import Sidebar from "../components/Sidebar"
// import Student from "../components/Student"
import StudentForm from "../components/StudentForm"

    // <Student />
const MainContent = () => (
  <div className="window-content">
    <Sidebar />
    <div className="pane padded-more">
      <StudentForm />
    </div>
  </div>
)

export default MainContent
