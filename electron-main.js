const electron         = require("electron");
const app              = electron.app;
const BrowserWindow    = electron.BrowserWindow;

app.on("window-all-closed", function() {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    "accept-first-mouse": true,
    "title-bar-style": "hidden"
  });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.openDevTools();
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
