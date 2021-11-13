"use strict";
var L03Sequenzmemory;
(function (L03Sequenzmemory) {
    document.querySelector("button")?.addEventListener("click", startGame);
    let benutzereingabeArray = [];
    let benutzereingabe;
    let shuffledArray = [];
    function startGame() {
        document.getElementById("fsSpecial")?.classList.add("isHidden");
        let eingabefeldWert = document.getElementById("eingabefeld");
        benutzereingabe = eingabefeldWert.value;
        benutzereingabeArray = benutzereingabe.split("");
        shuffledArray = benutzereingabe.split("");
        shuffle(benutzereingabeArray);
        createfield();
    }
    function shuffle(_array) {
        let currentIndex = shuffledArray.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
        }
        console.log(benutzereingabeArray);
        console.log(benutzereingabe);
        console.log(shuffledArray);
        return _array;
    }
    function createfield() {
        let letters = shuffledArray.length - 1;
        while (letters >= 0) {
            let spielfeld = document.getElementById("spielfeld");
            let karte = document.createElement("span");
            spielfeld.appendChild(karte);
            karte.addEventListener("click", check);
            let buchstabe = document.createElement("p");
            karte.appendChild(buchstabe);
            buchstabe.innerHTML = shuffledArray[letters];
            letters--;
            setTimeout(function () { buchstabe.classList.add("isHidden"); }, 5000);
        }
    }
    function check(_event) {
        console.log("ich wurde geklickt");
        // is clicked p value same as value 0 of correct sequenz array
    }
})(L03Sequenzmemory || (L03Sequenzmemory = {}));
//# sourceMappingURL=script.js.map