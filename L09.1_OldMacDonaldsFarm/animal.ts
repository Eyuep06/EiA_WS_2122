namespace OldMacDonaldsFarm {

    export class Animal {
        type: string;
        food: string;
        eatenAmount: number;
        sound: string;
        text: string;
        name: string;

        constructor(_type: string, _food: string, _eatenAmount: number, _sound: string, _name: string) {
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.eatenAmount = _eatenAmount;
            this.sound = _sound;
            this.text = `Ich bin ${this.type} und mache ${this.sound}. Ich esse gerne ${this.food}`;
        }

        stock(_stock: number): void {
            let difference: number;
            difference = _stock - this.eatenAmount;

            
        }

        sing(): string {
            // let h3: HTMLElement = <HTMLElement> document.querySelector("h3");
            // h3.innerHTML = (this.name);
            // let p: HTMLElement = <HTMLElement> document.getElementById("text");
            // p.innerHTML = (this.text);
            let text: string;
            text = "<h3>" + this.name + "</h3>" + "<br>" + this.text;
            return (text);
            
        }

    }

}