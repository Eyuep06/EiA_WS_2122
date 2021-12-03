"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let cow = new OldMacDonaldsFarm.Animal("die Kuh", "Graß", 15, "muuuuh", "Jon Jones", 50);
    let chicken = new OldMacDonaldsFarm.Animal("das Huhn", "Insekten", 2, "gackgack", "Conor McGregor", 25);
    let pig = new OldMacDonaldsFarm.Animal("das Schwein", "Heu", 5, "oink", "Dillon Danis", 50);
    let donkey = new OldMacDonaldsFarm.Animal("der Esel", "Getreide", 10, "iiiiaa", "Leon Edwards", 30);
    let dog = new OldMacDonaldsFarm.Animal("der Hund", "Äpfel", 3, "Wuff", "TJ Dilleshaw", 10);
    let allAnimals = [cow, chicken, pig, donkey, dog];
    function handleLoad(_event) {
        startDay();
    }
    function startDay() {
        for (let i = 0; i < allAnimals.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            let textArea = document.getElementById("textarea");
            textArea.appendChild(p);
            let p2 = document.createElement("p");
            p2.innerHTML = allAnimals[i].stock();
            let stockArea = document.getElementById("Vorrat");
            stockArea.appendChild(p2);
        }
    }
    //uptadeStock();
    function uptadeStock() {
        //cow
        cow.foodAmount = cow.foodAmount - cow.eatenAmount;
        //chicken
        chicken.foodAmount = chicken.foodAmount - chicken.eatenAmount;
        //pig
        pig.foodAmount = pig.foodAmount - chicken.eatenAmount;
        //donkey
        donkey.foodAmount = donkey.foodAmount - donkey.eatenAmount;
        //dog
        dog.foodAmount = dog.foodAmount - dog.eatenAmount;
    }
    setTimeout(uptadeStock, 2000);
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map