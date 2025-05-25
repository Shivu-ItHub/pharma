
const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron'); // Added dialog
const path = require('node:path');
const fs = require('node:fs');
const XLSX = require('xlsx'); // Added xlsx

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280, // Default width
    height: 800,  // Default height
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Recommended for security
      nodeIntegration: false, // Recommended for security, use preload for Node access
    },
    icon: path.join(__dirname, 'assets/icon.png') // Optional: Path to an application icon
  });

  mainWindow.loadFile('index.html');

  // mainWindow.webContents.openDevTools(); // Optional for debugging

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// IPC Handlers for Main Data Excel File
ipcMain.handle('read-excel-file', async (event, filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      return null; // File doesn't exist, app will handle creation/prompt
    }
    const workbook = XLSX.readFile(filePath);
    const sheets = {};
    workbook.SheetNames.forEach(sheetName => {
      sheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    });
    return sheets;
  } catch (error) {
    console.error('Failed to read Excel file:', error);
    throw error; // Propagate error to be handled by renderer
  }
});

ipcMain.handle('write-excel-file', async (event, { filePath, data }) => {
  try {
    const workbook = XLSX.utils.book_new();
    for (const sheetName in data) {
      if (Object.prototype.hasOwnProperty.call(data, sheetName)) {
        const worksheet = XLSX.utils.json_to_sheet(data[sheetName]);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      }
    }
    XLSX.writeFile(workbook, filePath);
    return { success: true, path: filePath };
  } catch (error) {
    console.error('Failed to write Excel file:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('show-open-dialog', async (event, options) => {
  const result = await dialog.showOpenDialog(mainWindow, options);
  return result;
});

ipcMain.handle('show-save-dialog', async (event, options) => {
  const result = await dialog.showSaveDialog(mainWindow, options);
  return result;
});


// IPC Handlers for Report Archiving
ipcMain.handle('get-documents-path', async () => {
  return app.getPath('documents');
});

ipcMain.handle('ensure-directory', async (event, dirPath) => {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    return { success: true, path: dirPath };
  } catch (error) {
    console.error('Failed to ensure directory:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('save-excel-b64', async (event, { filePath, data }) => {
  try {
    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync(filePath, buffer);
    return { success: true, path: filePath };
  } catch (error) {
    console.error('Failed to save Excel file:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('open-file-externally', async (event, filePath) => {
    try {
        await shell.openPath(filePath);
        return { success: true };
    } catch (error) {
        console.error('Failed to open file:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('show-item-in-folder', async (event, filePath) => {
    try {
        shell.showItemInFolder(filePath);
        return { success: true };
    } catch (error) {
        console.error('Failed to show item in folder:', error);
        return { success: false, error: error.message };
    }
});
