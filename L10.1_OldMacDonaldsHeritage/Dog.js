"use strict";
var Heritage;
(function (Heritage) {
    class Dog extends Heritage.Animal {
        constructor() {
            super("Strolch", "Fleisch", "Wuff", 2, 10);
            this.breed = ["Pitbull", "Kangal", "Pudel"];
        }
    }
    Heritage.Dog = Dog;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Dog.js.map