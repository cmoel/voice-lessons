import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"

import App from "./App"
import { initStudents } from "../actions/students"

class Root extends Component {
  componentDidMount() {
    const { dispatch } = this.props.store
    // get the current students list out of electron storage
    // dispatch(initStudents())
  }

  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
