import React                               from "react"
import { render }                          from "react-dom"
import Root                                from "./containers/Root"
import initialState                        from "./store/initialState"
import configureStore                      from "./store/configureStore"

const store = configureStore(initialState)

render(
  <Root store={store} />,
  document.querySelector("#main")
)
