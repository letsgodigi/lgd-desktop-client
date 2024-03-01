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
function injectCSSUrl(URL) {
    try {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", URL);
        oReq.send();
    } catch(e) {
        window.alert("ERROR: " + e.message);
    }
}
//Injection start
const dwin = nw.Window.get();
dwin.on('loaded', function(dwindow) {
    injectCSSUrl("https://letsgodigi.github.io/assets/custom.css");
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
