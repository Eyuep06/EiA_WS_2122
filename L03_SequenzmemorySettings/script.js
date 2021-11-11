"use strict";
var L03Sequenzmemory;
(function (L03Sequenzmemory) {
    document.querySelector("button")?.addEventListener("click", startGame);
    let benutzereingabeArray = [];
    let benutzereingabe;
    function startGame() {
        document.getElementById("fsSpecial")?.classList.add("isHidden");
        let eingabefeldWert = document.getElementById("eingabefeld");
        benutzereingabe = eingabefeldWert.value;
        benutzereingabeArray = benutzereingabe.split("");
        shuffle(benutzereingabeArray);
        createfield();
    }
    function shuffle(_array) {
        let currentIndex = benutzereingabeArray.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [benutzereingabeArray[currentIndex], benutzereingabeArray[randomIndex]] = [benutzereingabeArray[randomIndex], benutzereingabeArray[currentIndex]];
        }
        console.log(benutzereingabeArray);
        console.log(benutzereingabe);
        return _array;
    }
    function createfield() {
        let letters = benutzereingabeArray.length - 1;
        while (letters >= 0) {
            let spielfeld = document.getElementById("spielfeld");
            let karte = document.createElement("span");
            spielfeld.appendChild(karte);
            let buchstabe = document.createElement("p");
            karte.appendChild(buchstabe);
            buchstabe.innerHTML = benutzereingabeArray[letters];
            letters--;
        }
    }
})(L03Sequenzmemory || (L03Sequenzmemory = {}));
//# sourceMappingURL=script.js.map