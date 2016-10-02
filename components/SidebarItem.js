import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actionCreators from "../actions/students"

const SidebarItem = ({ showStudent, student }) => {
  const { id, name } = student
  return (
    <li className="list-group-item" onClick={(_) => showStudent(id)}>
      <div className="media-body">
        <strong>{name}</strong>
      </div>
    </li>
  )
}

SidebarItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(null, mapDispatchToProps)(SidebarItem)
