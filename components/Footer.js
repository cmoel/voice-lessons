import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { addStudent } from "../actions/students"

const Footer = ({ dispatch }) => {
  return (
    <footer className="toolbar toolbar-footer">
      <div className="toolbar-actions">
        <button
          className="btn btn-default"
          onClick={() => dispatch(addStudent())}
        >New Student</button>
      </div>
    </footer>
  )
}

export default connect()(Footer)
