"use strict";
var Heritage;
(function (Heritage) {
    class Animal {
        constructor(_name, _food, _noise, _eatenAmount, _foodAmount) {
            this.name = _name;
            this.food = _food;
            this.noise = _noise;
            this.eatenAmount = _eatenAmount;
            this.foodAmount = _foodAmount;
        }
        sing() {
            return `Ich bin ${this.name} und mache ${this.noise}. Ich esse gerne ${this.food}. `;
        }
        eat() {
            return `<b>${this.food}=</b>  ${this.foodAmount} Kg <br>`;
        }
    }
    Heritage.Animal = Animal;
})(Heritage || (Heritage = {}));
//# sourceMappingURL=Animal.js.map