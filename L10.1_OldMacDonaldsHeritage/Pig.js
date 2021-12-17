"use strict";
var Heritage;
(function (Heritage) {
    class Pig extends Heritage.Animal {
        constructor() {
            super("Ferkel", "Alles", "Grunz", 8, 25);
            this.breedArray = ["Wildschwein", "Berkshire-Schwein", "Hampshire-Schwein"];
            this.i = Math.floor(Math.random() * 3);
            this.specialAction = "Ich kann leider nichts.";
            super.doSpecialAction(this.specialAction);
            super.breedMethode(this.breedArray[this.i]);
        }
    }
    Heritage.Pig = Pig;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Pig.js.map