import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import R from "ramda"

import * as actions from "./actions"
import Input from "./Input"
import RepList from "./RepList"

class Student extends Component {

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
    // still missing inputs for languages and notes
    const { name, phone, school, graduationYear, languages, repList, notes } = this.props.current
    return(
      <form className="pane-group">
        <div className="pane padded-more">
          <Input id="name" label="Name" value={name} onChange={this.handleInputChange} />
          <Input id="phone" label="Phone" value={phone} onChange={this.handleInputChange} />
          <Input id="school" label="School" value={school} onChange={this.handleInputChange} />
          <Input id="graduationYear" label="Graduation Year" value={graduationYear} type="number" onChange={this.handleInputChange} />
        </div>
        <div className="pane padded-more">
          <RepList value={repList} onChange={this.handleInputChange} />
        </div>
      </form>
    )
  }

}

const mapStateToProps = (state, _ownProps) => state.students
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Student)
