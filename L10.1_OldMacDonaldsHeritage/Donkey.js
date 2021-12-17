"use strict";
var Heritage;
(function (Heritage) {
    class Donkey extends Heritage.Animal {
        constructor() {
            super("Esel", "Heu", "IiiAaa", 3, 9);
            this.breedArray = ["Pitbull", "Kangal", "Pudel"];
            this.i = Math.floor(Math.random() * 3);
            this.specialAction = "Ich kann für dich tragen.";
            super.doSpecialAction(this.specialAction);
            super.breedMethode(this.breedArray[this.i]);
        }
    }
    Heritage.Donkey = Donkey;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Donkey.js.map