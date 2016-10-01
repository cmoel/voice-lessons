import React, { Component }                        from "react"
import { connect }                                 from "react-redux"
import { submitUpdateStudent }                     from "../actions/students"

class StudentForm extends Component {

  constructor(props) {
    super(props)
    const { name } = props.student
    this.state = {
      name,
    }
    this.submitForm        = this.submitForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  submitForm(e) {
    e.preventDefault()
    const { dispatch, student } = this.props
    const { id } = student
    dispatch(submitUpdateStudent(id, this.state))
  }

  handleInputChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-form btn-default">Done</button>
        </div>
      </form>
    )
  }
}

export default connect()(StudentForm)
