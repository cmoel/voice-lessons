import { remote, ipcRenderer } from "electron"
import React from "react"
import { render } from "react-dom"
import App from "./App"
import configureStore from "./store"

const mainProcess = remote.require("./electron-main")
mainProcess.retrieveStudentsFromStorage()

ipcRenderer.on(
  "retrieved-students",
  (_evt, students) => initApp(students)
)

ipcRenderer.on(
  "persist-students-success",
  (_evt) => console.log("successfully persisted students")
)

ipcRenderer.on(
  "persist-students-failed",
  (_evt, err) => console.error("failed to persist students", err)
)

const initApp = (students) => {
  const store = configureStore(students)
  render(
    <App store={store} />,
    document.querySelector("#main")
  )
}
