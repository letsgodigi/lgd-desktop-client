function checkForUpdate(remote) {
    const package = require('./package.json');
    if(package.version != remote) {
        const update = window.confirm("𝗡𝗲𝘄 𝗰𝗹𝗶𝗲𝗻𝘁 𝘂𝗽𝗱𝗮𝘁𝗲: " + remote + "\nWould you like to download the updated client?");
        if(update) nw.Shell.openExternal("https://github.com/letsgodigi/lgd-desktop-client/releases/latest");
    }
}
function getRemoteVersion() {
    var oReq = new XMLHttpRequest();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        const js = JSON.parse(this.responseText);
        checkForUpdate(js.version);
    });
    oReq.open("GET", "https://raw.githubusercontent.com/letsgodigi/lgd-desktop-client/main/src/package.json");
    oReq.timeout = 5000;
    oReq.send();
}
//Injection start
getRemoteVersion();
const dwin = nw.Window.get();
dwin.on('maximize', function(dwindow) {
    localStorage.setItem("maximized", "true");
});
dwin.on('restore', function(dwindow) {
    localStorage.setItem("maximized", "false");
});
const is_maximized = localStorage.getItem("maximized");
if(is_maximized == "true") {
    dwin.maximize();
}
