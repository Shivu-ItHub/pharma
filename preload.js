
// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  },
  // Main data file operations
  readExcelFile: (filePath) => ipcRenderer.invoke('read-excel-file', filePath),
  writeExcelFile: (args) => ipcRenderer.invoke('write-excel-file', args), // args: { filePath, data }
  showOpenDialog: (options) => ipcRenderer.invoke('show-open-dialog', options),
  showSaveDialog: (options) => ipcRenderer.invoke('show-save-dialog', options),

  // Report Archiving specific APIs
  getDocumentsPath: () => ipcRenderer.invoke('get-documents-path'),
  ensureDirectory: (dirPath) => ipcRenderer.invoke('ensure-directory', dirPath),
  saveExcelB64: (args) => ipcRenderer.invoke('save-excel-b64', args), // args: { filePath, data }
  openFileExternally: (filePath) => ipcRenderer.invoke('open-file-externally', filePath),
  showItemInFolder: (filePath) => ipcRenderer.invoke('show-item-in-folder', filePath),
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script has run, DOM is ready. ElectronAPI exposed.');
});
