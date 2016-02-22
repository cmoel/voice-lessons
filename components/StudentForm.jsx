import React, { Component }                        from "react"
import { connect }                                 from "react-redux"
import { submitUpdateStudent }                     from "../actions/students"

class StudentForm extends Component {

  constructor(props) {
    super(props)
    const { name, phone, school, graduationYear, languages } = props.student
    this.state = {
      name,
      phone,
      school,
      graduationYear,
      languages,
    }
    this.submitForm        = this.submitForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillReceiveProps({ student }, _currentProps) {
    const { name, phone, school, graduationYear, languages } = student
    this.setState({
      name,
      phone,
      school,
      graduationYear,
      languages,
    })
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
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input
            id="school"
            type="text"
            className="form-control"
            placeholder="school"
            value={this.state.school}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            className="form-control"
            placeholder="201-867-5309"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="graduationYear">Graduation Year</label>
          <input
            id="graduationYear"
            type="number"
            className="form-control"
            placeholder="2005"
            value={this.state.graduationYear}
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
