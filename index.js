/* jshint esversion:6, node: true */
"use strict";

const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const client = (process.env.NODE_ENV !== 'production') ? require(
  'electron-connect').client : undefined;

if (process.env.NODE_ENV !== 'production') {
  require('electron-debug')({
    showDevTools: true
  });
}
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let windowParams = {
  width: 800,
  height: 480,
  show: false,
  frame: false,
  center: true,
  hasShadow: false,
  resizable: false,
  fullscreen: false, // should be true in production
  kiosk: false, // should be true in production
  title: 'Petron',
  webPreferences: {
    webSecurity: false
  }
};

app.commandLine.appendSwitch('--touch-devices', 8);
app.commandLine.appendSwitch('--touch-events', 'enabled');
app.commandLine.appendSwitch('ignore-certificate-errors');

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow(windowParams);
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  // mainWindow.setProgressBar(-1); // hack: force icon refresh

  mainWindow.webContents.debugger.sendCommand(
    'Emulation.setTouchEmulationEnabled', {
      enabled: true,
      configuration: 'mobile'
    });

  if (process.env.NODE_ENV !== 'production') {
    client.create(mainWindow, {
      logLevel: 0
    });
  }

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  app.focus();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
