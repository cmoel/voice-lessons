import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import R from "ramda"
import * as actionCreators from "../actions/students"
// import * as componentActions from "./actions"

class StudentForm extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
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

  render() {
    const { name } = this.props.current
    return(
      <form>
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
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
