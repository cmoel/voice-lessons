import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import MainContent from "./MainContent";
import Footer from "./Footer";

require("./index.scss");

const App = ({ store }) => (
  <Provider store={store}>
    <div className="window">
      <MainContent />
      <Footer />
    </div>
  </Provider>
);

App.propTypes = { store: PropTypes.object.isRequired };

export default App;
