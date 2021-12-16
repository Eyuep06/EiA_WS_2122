"use strict";
var Heritage;
(function (Heritage) {
    window.addEventListener("load", handleLoad);
    let dog = new Heritage.Dog;
    let cow = new Heritage.Cow;
    let chicken = new Heritage.Chicken;
    let pig = new Heritage.Pig;
    let donkey = new Heritage.Donkey;
    let allAnimals = [dog, cow, chicken, pig, donkey];
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
            p2.innerHTML = allAnimals[i].eat();
            let stockArea = document.getElementById("Vorrat");
            stockArea.appendChild(p2);
        }
    }
    uptadeStock();
    function uptadeStock() {
        dog.foodAmount = dog.foodAmount - dog.eatenAmount;
    }
})(Heritage || (Heritage = {}));
//# sourceMappingURL=main.js.map