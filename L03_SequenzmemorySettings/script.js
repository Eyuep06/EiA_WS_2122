"use strict";
var L03Sequenzmemory;
(function (L03Sequenzmemory) {
    document.querySelector("button")?.addEventListener("click", startGame);
    let benutzereingabeArray = [];
    let benutzereingabe;
    let shuffledArray = [];
    let karte;
    let background;
    let allInputs;
    let formData;
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
            karte = document.createElement("span");
            spielfeld.appendChild(karte);
            karte.addEventListener("click", check);
            let buchstabe = document.createElement("p");
            karte.appendChild(buchstabe);
            buchstabe.innerHTML = shuffledArray[letters];
            letters--;
            setTimeout(function () { buchstabe.classList.add("isHidden"); }, 5000);
        }
        //übergabe klappt nicht
        formData = new FormData(document.forms[0]);
        background = allInputs[1].value;
        document.body.style.backgroundColor = background;
    }
    // die Überprüfung klappt leider noch nicht ganz
    function check(_event) {
        karte.classList.remove("isHidden");
        for (let i = 0; i <= shuffledArray.length; i++) {
            let nutzerClickArray = [];
            let target = _event.target;
            let textContent = target.textContent;
            nutzerClickArray.push(textContent);
            if (benutzereingabeArray[i] == nutzerClickArray[i] && i == shuffledArray.length) {
                alert("sauber");
            }
            else if (benutzereingabeArray[i] != nutzerClickArray[i]) {
                alert("Schwache Leistung");
            }
        }
    }
})(L03Sequenzmemory || (L03Sequenzmemory = {}));
//# sourceMappingURL=script.js.map