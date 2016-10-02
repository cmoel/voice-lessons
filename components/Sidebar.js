import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import SidebarItem from "./SidebarItem"
import studentList from "../utils/studentList"

    // {console.log("current from sidebar", current)}
const Sidebar = ({ previous, current, next }) => (
  <div className="pane-sm sidebar">
    <ul className="list-group">
      { previous.map((student, i) => <SidebarItem key={i} student={student} />) }
      <SidebarItem student={current} />
      { next.map((student, i) => <SidebarItem key={i} student={student} />) }
    </ul>
  </div>
)

Sidebar.propTypes = {
  previous: PropTypes.arrayOf(PropTypes.object).isRequired,
  current: PropTypes.object.isRequired,
  next: PropTypes.arrayOf(PropTypes.object).isRequired,
  // students: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state, _ownProps) => state.students
  // return state.students
  // // return {
  // //   // students: studentList(students),
  // //   students,
  // // }
// }

export default connect(mapStateToProps)(Sidebar)
