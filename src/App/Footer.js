import React, { Component } from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actions from "../Student/actions"

const { newStudent } = actions

const Footer = ({ addStudent, deleteStudent, students }) => (
  <footer className="toolbar toolbar-footer">
    <div className="toolbar-actions">
      <button
        className="btn btn-default"
        onClick={() => addStudent(newStudent())}
        children="Add Student"
      />
      <button
        className="btn btn-negative pull-right"
        onClick={() => deleteStudent(students.current)}
        children="Delete"
      />
    </div>
  </footer>
)

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
const mapStateToProps = (state, _ownProps) => state

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
