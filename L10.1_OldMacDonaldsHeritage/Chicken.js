"use strict";
var Heritage;
(function (Heritage) {
    class Chicken extends Heritage.Animal {
        constructor() {
            super("Conor McChicken", "Körner", "Gack", 1, 8);
            this.breedArray = ["Seidenhuhn", "Leghorn", "Brahma"];
            this.i = Math.floor(Math.random() * 3 + 0);
            this.specialAction = "Ich kann dir Eier legen.";
            super.doSpecialAction(this.specialAction);
            super.breedMethode(this.breedArray[this.i]);
        }
    }
    Heritage.Chicken = Chicken;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Chicken.js.map