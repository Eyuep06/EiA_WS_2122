"use strict";
var Heritage;
(function (Heritage) {
    class Cow extends Heritage.Animal {
        constructor() {
            super("Annabelle", "Gras", "Muh", 5, 50);
            this.breedArray = ["Angus", "Galloway", "Highland-Cattle"];
            this.i = Math.floor(Math.random() * 3);
            this.specialAction = "Ich kann dir Milch geben.";
            super.doSpecialAction(this.specialAction);
            super.breedMethode(this.breedArray[this.i]);
        }
    }
    Heritage.Cow = Cow;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Cow.js.map