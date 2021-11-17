"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    console.log("hallo");
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let x = Math.random() * 800;
        let y = Math.random() * 600;
        drawArt(x, y);
    }
    function drawArt(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y - 30);
        crc2.lineTo(_x - 60, _y);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fillStyle = "#FF0000"; //randomColor
        crc2.strokeStyle = "blue"; //randomColor
        crc2.lineWidth = 2; //randomNum
        crc2.stroke();
        crc2.fill();
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=script.js.map