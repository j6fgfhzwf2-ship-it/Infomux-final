const { app, BrowserWindow } = require('electron');
const path = require('path');
require('dotenv').config(); // Charger la clé API

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// Exemple : afficher la clé API (pour debug, peut retirer après)
console.log("Clé API chargée :", process.env.API_KEY);
