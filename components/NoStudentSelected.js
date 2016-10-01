import React from "react"

const NoStudentSelected = () => {
  return (
    <p>No student selected</p>
  )
}

export default NoStudentSelected

// import React from "react"
// import { connect } from "react-redux"
// import { addStudent } from "../actions/students"

// const NoStudentSelected = ({ dispatch }) => {
//   return (
//     <div style={{ margin: "0 auto" }}>
//       <button
//         onClick={ () => dispatch(addStudent()) }
//         className="btn btn-large btn-primary"
//       >Add Student</button>
//     </div>
//   )
// }

// export default connect()(NoStudentSelected)
