var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleload);
    var div0 = document.querySelector("#div0");
    var div1 = document.querySelector("div1");
    var body = document.querySelector("body");
    function handleload() {
        document.addEventListener("mousemove", setInfobox);
        document.addEventListener("click", setInfobox);
        document.addEventListener("keyup", setInfobox);
        body.addEventListener("click", setInfobox);
        body.addEventListener("keyup", setInfobox);
        div0.addEventListener("click", setInfobox);
        div0.addEventListener("keyup", setInfobox);
        div1.addEventListener("click", setInfobox);
        div1.addEventListener("keyup", setInfobox);
    }
    function setInfobox(_event) {
        var posX = _event.screenX;
        var posY = _event.screenY;
        document.querySelector("span").innerHTML = posX + ", " + posY;
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map