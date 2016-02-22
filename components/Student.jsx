import React, { Component, PropTypes }             from "react"
import { connect }                                 from "react-redux"
import { find, propEq }                            from "ramda"

import StudentForm                                 from "./StudentForm"

const Student = ({ currentStudent, students }) => {
  const student = find(propEq("id", currentStudent))(students)
  return (
    <div className="pane padded-more">
      <StudentForm student={student} />
    </div>
  )
}

Student.propTypes = {
  currentStudent: PropTypes.number.isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
}

function mapStateToProps(state, _ownProps) {
  const { students, currentStudent } = state
  return {
    currentStudent,
    students,
  }
}

export default connect(mapStateToProps)(Student)
