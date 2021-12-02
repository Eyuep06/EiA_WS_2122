"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let cow = new OldMacDonaldsFarm.Animal("die Kuh", "Graß", 15, "muuuuh", "Jon Jones");
    let chicken = new OldMacDonaldsFarm.Animal("das Huhn", "Grains", 2, "gackgack", "Conor McGregor");
    let pig = new OldMacDonaldsFarm.Animal("das Schwein", "Fleisch", 5, "oink", "Dillon Danis");
    let donkey = new OldMacDonaldsFarm.Animal("der Esel", "Graß", 10, "iiiiaa", "Leon Edwards");
    let dog = new OldMacDonaldsFarm.Animal("der Hund", "Fleisch", 3, "Wuff", "TJ Dilleshaw");
    let allAnimals = [cow, chicken, pig, donkey, dog];
    // export interface FoodStock {
    //     [key: string]: number;
    // }
    // let food: FoodStock = {
    //     grasscer: 50,
    //     meat: 25,
    //     grains: 30
    // };
    function handleLoad(_event) {
        startDay();
    }
    function startDay() {
        for (let i = 0; i < allAnimals.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            let textArea = document.getElementById("textarea");
            textArea.appendChild(p);
        }
        // for (let i: number = 1; i <= 3; i++ ) {
        //     let p2: HTMLParagraphElement = document.createElement("p");
        //     p2.innerHTML = allAnimals[i].stock(food);
        //     let vorratArea: HTMLDivElement = <HTMLDivElement> document.getElementById("Vorrat");
        //     vorratArea.appendChild(p2);
        // }
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map