import React, { Component, PropTypes }             from "react"
import { connect }                                 from "react-redux"

import SidebarItem                                 from "./SidebarItem"

const Sidebar = ({ students }) => {
  return (
    <div className="pane-sm sidebar">
      <ul className="list-group">
        { students.map((student, _i) => {
          return <SidebarItem key={`student-${student.id}`} student={student} /> }) }
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
