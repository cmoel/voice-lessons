const { app, BrowserWindow } = require("electron")
// const Menu = electron.Menu
// const crashReporter = electron.crashReporter

// // report crashes
// crashReporter.start({
//   productName: "VoiceLessons",
//   companyName: "cmoel.com",
//   submitURL: "http://cmoel.com/crashes",
//   autoSubmit: false
// })

let mainWindow = null

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    acceptFirstMouse: true,
    title: app.getName(),
  })
  mainWindow.loadURL("file://" + __dirname + "/index.html")
  mainWindow.webContents.openDevTools()
  require("devtron").install()
  mainWindow.on("closed", () => mainWindow = null)
})
