var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleload);
    function handleload() {
        document.addEventListener("mousemove", setInfobox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
    }
    function setInfobox(_event) {
        var infobox = document.querySelector("span");
        var posX = _event.screenX;
        var posY = _event.screenY - 103;
        infobox.innerHTML = "X: " + posX + " Y: " + posY + _event.target;
        infobox.style.top = posY + 10 + "px";
        infobox.style.left = posX + 10 + "px";
    }
    function logInfo(_event) {
        console.log("Event Object = " + _event + " Current Target = " + _event.currentTarget, " Target = " + _event.target + " Type = " + _event.type);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map