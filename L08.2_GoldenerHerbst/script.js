"use strict";
var goldenerHerbst;
(function (goldenerHerbst) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * 0.62;
        drawBackground();
        drawSun({ x: 150, y: 150 });
        drawCloud({ x: 550, y: 100 }, { x: 200, y: 75 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTree({ x: 50, y: 450 }, { x: 150, y: 100 });
        drawTree({ x: 250, y: 350 }, { x: 150, y: 100 });
        drawTree({ x: 550, y: 400 }, { x: 150, y: 100 });
        drawLeaf1({ x: 400, y: 300 }, { x: 400, y: 600 });
        drawLeaf2({ x: 400, y: 300 }, { x: 400, y: 600 });
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random()) * _size.y;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTree(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x, _position.y, 50, 100);
        let nParticles = 35;
        let radiusParticle = 30;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "orange";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random()) * _size.y;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLeaf1(_position, _size) {
        let nLeafs = 10;
        let leaf = new Path2D();
        //leaf
        crc2.beginPath();
        leaf.arc(0, 0, 16, 0, Math.PI * .25);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "orange";
        for (let i = 0; i < nLeafs; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random()) * _size.y;
            crc2.translate(x, y);
            crc2.fill(leaf);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLeaf2(_position, _size) {
        let nLeafs = 10;
        let leaf = new Path2D();
        //leaf
        crc2.beginPath();
        leaf.arc(0, 0, 16, 0, Math.PI * .25);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "lightbrown";
        for (let i = 0; i < nLeafs; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random()) * _size.y;
            crc2.translate(x, y);
            crc2.fill(leaf);
            crc2.restore();
        }
        crc2.restore();
    }
})(goldenerHerbst || (goldenerHerbst = {}));
//# sourceMappingURL=script.js.map