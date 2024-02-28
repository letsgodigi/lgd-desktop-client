function addStyle(styleString) {
    try {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    } catch(e) {
        window.alert("ERROR: " + e.message);
    }
}
function reqListener () {
    addStyle(this.responseText);
}
//Injection start
const dwin = nw.Window.get();
dwin.on('loaded', function(dwindow) {
    try {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://letsgodigi.github.io/assets/custom.css");
        oReq.send();
    } catch(e) {
        window.alert("ERROR: " + e.message);
    }
});
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
