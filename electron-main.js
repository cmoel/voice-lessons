const { app, BrowserWindow } = require("electron")
// const { app, BrowserWindow, Menu } = require("electron")
// const { app, BrowserWindow, Menu, crashReporter } = require("electron")
const storage = require("electron-storage")
const defaultStudents = require("./default-students")


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
  ensureStudentStorageExists()

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


const ensureStudentStorageExists = () => (
  storage
  .isPathExists("students.json")
  .then(exists => {
    if(!exists) {
      storage
      .set("students", defaultStudents)
      .then(() => console.log("created students storage file"))
      .catch(err => console.error(err))
    }
  })
)


const sendStudents = students => mainWindow.webContents.send("retrieved-students", students)
// This is just a placeholder for now and needs to be updated with actual error handling
const sendError = err => console.error(err)


const retrieveStudentsFromStorage = () => (
  storage
  .get("students")
  .then(students => sendStudents(students))
  .catch(err => sendError(err))
)


const persistStudentsToStorage = (students) => (
  storage
  .set("students", students)
  .then(() => console.log("updated students"))
  .catch(err => console.error(err))
)


exports.retrieveStudentsFromStorage = retrieveStudentsFromStorage
exports.persistStudentsToStorage = persistStudentsToStorage
