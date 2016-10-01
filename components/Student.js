import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { find, propEq } from "ramda"

import StudentForm from "./StudentForm"
import NoStudentSelected from "./NoStudentSelected"

const getStudentById = id => propEq("id", id)

const Student = ({ currentStudentId, students }) => {
  const currentStudent = find(getStudentById(currentStudentId), students)
  const currentStudentIsValid = students.length > 0 && currentStudentId != 0

  return (
    <div className="pane padded-more">
      { currentStudentIsValid
      ? <StudentForm student={currentStudent} />
      : <NoStudentSelected />
      }
    </div>
  )
}

Student.propTypes = {
  currentStudentId: PropTypes.number.isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
}

function mapStateToProps(state, _ownProps) {
  const { students, currentStudentId } = state
  return {
    currentStudentId,
    students,
  }
}

export default connect(mapStateToProps)(Student)
