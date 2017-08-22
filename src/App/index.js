import React from "react";
import {Provider} from "react-redux";
import {AppContainer} from "react-hot-loader";
import PropTypes from "prop-types";

import MainContent from "../MainContent";
import Footer from "../Footer";

const App = ({store}) =>
  <Provider store={store}>
    <AppContainer>
      <div className="window">
        <MainContent />
        <Footer />
      </div>
    </AppContainer>
  </Provider>;

App.propTypes = {store: PropTypes.object.isRequired};

export default App;
