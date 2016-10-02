import React, { PropTypes } from "react"
import { Provider } from "react-redux"

import MainContent from "./MainContent"
import Footer from "../components/Footer"

require("../index.scss")

const App = ({ store }) => (
  <Provider store={store}>
    <div className="window">
      <MainContent />
      <Footer />
    </div>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
