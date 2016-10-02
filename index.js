import { remote, ipcRenderer } from "electron"
import React from "react"
import { render } from "react-dom"
import Root from "./containers/Root"
import configureStore from "./store/configureStore"

const mainProcess = remote.require("./electron-main")
mainProcess.retrieveStudentsFromStorage()

ipcRenderer.on("retrieved-students", (evt, students) => {
  const store = configureStore(students)
  render(
    <Root store={store} />,
    document.querySelector("#main")
  )
})
