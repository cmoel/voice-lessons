import { remote } from "electron"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import rootReducer from "./reducers"

const mainProcess = remote.require("./electron-main")

export default initialState => {

  const persist = store => next => action => {
    const result = next(action)
    const { students } = store.getState()

    setTimeout(() => mainProcess.persistStudentsToStorage({ students }))

    return result
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, persist)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers")
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
