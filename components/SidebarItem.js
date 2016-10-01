import React, { Component, PropTypes }             from "react"
import { connect }                                 from "react-redux"
import { setCurrentStudent }                       from "../actions/currentStudent"

const SidebarItem = ({ dispatch, student }) => {
  const { id, name } = student
  return (
    <li className="list-group-item" onClick={ () => { dispatch(setCurrentStudent(id)) }}>
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

export default connect()(SidebarItem)
