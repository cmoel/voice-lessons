import {app, BrowserWindow, Menu, ipcMain} from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
import {enableLiveReload} from "electron-compile";
import storage from "electron-storage";
import log from "electron-log";

log.transports.console.level = false;
log.transports.file.level = "info";

import AppMenu from "./AppMenu";
import defaultStudents from "./default-students";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({strategy: "react-hmr"});

const ensureStudentStorageExists = () =>
  storage.isPathExists("students.json").then(exists => {
    if (!exists) {
      storage
        .set("students", {students: defaultStudents})
        .then(() => log.info("created students storage file"))
        .catch(err => log.error(err));
    }
  });

const createWindow = async () => {
  Menu.setApplicationMenu(AppMenu);

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    acceptFirstMouse: true,
    title: app.getName(),
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  ensureStudentStorageExists();
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("fetch-students", async evt => {
  const students = await storage.get("students");
  log.info(`fetched students ${JSON.stringify(students)}`);
  evt.returnValue = students;
});

ipcMain.on("persist-students", (evt, students) => {
  storage
    .set("students", students)
    .then(() => evt.sender.send("persist-students-success", students))
    .catch(err => evt.sender.send("persist-students-failed", err));
});
