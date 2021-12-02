"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let grassStock = 100;
    let grainsStock = 50;
    let meatStock = 25;
    let cow = new OldMacDonaldsFarm.Animal("die Kuh", "Graß", 15, "muuuuh", "Jon Jones");
    let chicken = new OldMacDonaldsFarm.Animal("das Huhn", "Grains", 2, "gackgack", "Conor McGregor");
    let pig = new OldMacDonaldsFarm.Animal("das Schwein", "Fleisch", 5, "oink", "Dillon Danis");
    let donkey = new OldMacDonaldsFarm.Animal("der Esel", "Graß", 10, "iiiiaa", "Leon Edwards");
    let dog = new OldMacDonaldsFarm.Animal("der Hund", "Fleisch", 3, "Wuff", "TJ Dilleshaw");
    let allAnimals = [cow, chicken, pig, donkey, dog];
    let textArea = document.getElementById(".textarea");
    function handleLoad(_event) {
        console.log("bir iki bir iki");
        startDay();
    }
    function startDay() {
        for (let i = 0; i < allAnimals.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            textArea.appendChild(p);
        }
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map