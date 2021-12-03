"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        constructor(_type, _food, _eatenAmount, _sound, _name, _foodAmount) {
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.sound = _sound;
            this.text = `Ich bin ${this.type} und mache ${this.sound}. Ich esse gerne ${this.food}.`;
            this.foodAmount = _foodAmount;
        }
        stock() {
            return `<b>${this.food}</b> : ${this.foodAmount} kg, <br>`;
        }
        sing() {
            let text;
            text = "<h3>" + this.name + "</h3>" + "<br>" + this.text;
            return (text);
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map