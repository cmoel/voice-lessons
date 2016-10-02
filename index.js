import { remote, ipcRenderer } from "electron"
import React from "react"
import { render } from "react-dom"
import App from "./containers/App"
import configureStore from "./store/configureStore"

const mainProcess = remote.require("./electron-main")
mainProcess.retrieveStudentsFromStorage()

ipcRenderer.on(
  "retrieved-students",
  (_evt, students) => initApp(students)
)

const initApp = (students) => {
  const store = configureStore(students)
  render(
    <App store={store} />,
    document.querySelector("#main")
  )
}
