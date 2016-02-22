import React, { Component, PropTypes }             from "react"
import { connect }                                 from "react-redux"
import { setCurrentStudent }                       from "../actions/currentStudent"

const SidebarItem = ({ dispatch, student }) => {
  const { id, name, school } = student
  return (
    <li className="list-group-item" onClick={ () => { dispatch(setCurrentStudent(id)) }}>
      <div className="media-body">
        <strong>{name}</strong>
        <p>{school}</p>
      </div>
    </li>
  )
}

SidebarItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    school: PropTypes.string.isRequired,
    graduationYear: PropTypes.number,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default connect()(SidebarItem)
