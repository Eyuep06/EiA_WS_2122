"use strict";
var Heritage;
(function (Heritage) {
    class Dog extends Heritage.Animal {
        constructor() {
            super("Strolch", "Fleisch", "Wuff", 2, 10);
            this.breedArray = ["Pitbull", "Kangal", "Pudel"];
            this.i = Math.floor(Math.random() * 3);
            this.specialAction = "Ich kann dir die Zeitung holen.";
            super.doSpecialAction(this.specialAction);
            super.breedMethode(this.breedArray[this.i]);
        }
    }
    Heritage.Dog = Dog;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Dog.js.map