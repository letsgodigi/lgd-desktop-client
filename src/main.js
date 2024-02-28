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
if(window.location.href.indexOf("digimon.ddns.net.psim.us")) {
    try {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://pastebin.com/raw/JjEsN5u4");
        oReq.send();
    } catch(e) {
        window.alert("ERROR: " + e.message);
    }
}
