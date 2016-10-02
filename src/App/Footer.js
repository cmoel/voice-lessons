import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actions from "../Student/actions"

const { newStudent } = actions

const Footer = ({ addStudent }) => (
  <footer className="toolbar toolbar-footer">
    <div className="toolbar-actions">
      <button
        className="btn btn-default"
        onClick={() => addStudent(newStudent())}
      >New Student</button>
    </div>
  </footer>
)

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Footer)
