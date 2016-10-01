import React, { Component, PropTypes }             from "react"
import { connect }                                 from "react-redux"

import SidebarItem                                 from "./SidebarItem"

const buildSidebarItems = (students) => {
  const sidebarStudents = students.map((student, _i) => {
    return <SidebarItem key={`student-${student.id}`} student={student} />
  })
  return sidebarStudents
}

const Sidebar = ({ students }) => {
        // <li className="list-group-header">
        //   <input className="form-control" type="text" placeholder="Search for someone" />
        // </li>
  return (
    <div className="pane-sm sidebar">
      <ul className="list-group">
        { buildSidebarItems(students) }
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
}

function mapStateToProps(state, _ownProps) {
  const { students } = state
  return {
    students,
  }
}

export default connect(mapStateToProps)(Sidebar)
