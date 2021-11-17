"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < 99; i++) {
            let x = Math.random() * 600;
            let y = Math.random() * 450;
            drawArt(x, y);
        }
    }
    function drawArt(_x, _y) {
        // alle _x und _y bekommen die gleiche Zahl, wie kriegt jeder eine eigene random zahl
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x, _y);
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