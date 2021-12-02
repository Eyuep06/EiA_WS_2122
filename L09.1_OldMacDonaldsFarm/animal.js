"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        constructor(_type, _food, _eatenAmount, _sound, _name) {
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.sound = _sound;
            this.text = `Ich bin ${this.type} und mache ${this.sound}. Ich esse gerne ${this.food}`;
        }
        stock(_stock) {
            let difference;
            difference = _stock - this.eatenAmount;
        }
        sing() {
            // let h3: HTMLElement = <HTMLElement> document.querySelector("h3");
            // h3.innerHTML = (this.name);
            // let p: HTMLElement = <HTMLElement> document.getElementById("text");
            // p.innerHTML = (this.text);
            let text;
            text = "<h3>" + this.name + "</h3>" + "<br>" + this.text;
            return (text);
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map