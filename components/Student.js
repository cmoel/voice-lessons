import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import R from "ramda"

import * as actions from "../actions/students"

class Student extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  handleInputChange(e) {
    const { updateStudent, current: student } = this.props
    updateStudent(
      R.assoc(
        e.target.id,
        e.target.value,
        student
      )
    )
  }

  deleteStudent(e) {
    e.preventDefault()
    const { deleteStudent, current: student } = this.props
    deleteStudent(student)
  }

  render() {
    const { name } = this.props.current
    return(
      <form>
        <button
          className="btn btn-negative pull-right"
          onClick={(e) => this.deleteStudent(e)}
          children="Delete"
        />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
      </form>
    )
  }

}

const mapStateToProps = (state, _ownProps) => state.students
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Student)
