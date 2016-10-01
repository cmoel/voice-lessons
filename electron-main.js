const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const Menu = electron.Menu;
// const crashReporter = electron.crashReporter;

// // report crashes
// crashReporter.start({
//   productName: "VoiceLessons",
//   companyName: "cmoel.com",
//   submitURL: "http://cmoel.com/crashes",
//   autoSubmit: false
// });

app.on("window-all-closed", function() {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    "acceptFirstMouse": true,
    "titleBarStyle": "hidden"
  });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.openDevTools();
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
