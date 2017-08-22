import {ipcRenderer} from "electron";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persist = store => next => action => {
  const result = next(action);
  const {students} = store.getState();

  ipcRenderer.send("persist-students", {students});

  return result;
};

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, persist)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
