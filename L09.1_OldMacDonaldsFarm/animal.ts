namespace OldMacDonaldsFarm {

    export class Animal {
        type: string;
        food: string;
        eatenAmount: number;
        sound: string;
        text: string;
        name: string;
        foodAmount: number;

        constructor(_type: string, _food: string, _eatenAmount: number, _sound: string, _name: string, _foodAmount: number) {
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.sound = _sound;
            this.text = `Ich bin ${this.type} und mache ${this.sound}. Ich esse gerne ${this.food}.`;
            this.foodAmount = _foodAmount;
        }

        stock(): string {

            return `<b>${this.food}</b> : ${this.foodAmount} kg, <br>`;
        }

        sing(): string {

            let text: string;
            text = "<h3>" + this.name + "</h3>" + "<br>" + this.text;
            return (text);

        }

    }

}