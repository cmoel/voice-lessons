import React, { Component, PropTypes }             from "react"

const SidebarItem = ({ student }) => {
  return (
    <li className="list-group-item">
      <div className="media-body">
        <strong>{student.name}</strong>
        <p>{student.school}</p>
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

export default SidebarItem
