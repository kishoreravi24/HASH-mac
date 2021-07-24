const {app,BrowserWindow} = require('electron');

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width:800,
        height: 700,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadFile('assets/index.html')
};

app.on('ready',() => {
    createWindow();
})

app.on('window-all-closed', () => {
    app.quit();
})