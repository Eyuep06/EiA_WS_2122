namespace Heritage {
    export class Animal {
        name: string;
        food: string;
        noise: string;
        eatenAmount: number;
        foodAmount: number;

        constructor(_name: string, _food: string, _noise: string, _eatenAmount: number, _foodAmount: number) {
            this.name = _name;
            this.food = _food;
            this.noise = _noise;
            this.eatenAmount = _eatenAmount;
            this.foodAmount = _foodAmount;
        }

        sing(): string {
            return `Ich bin ${this.name} und mache ${this.noise}. Ich esse gerne ${this.food}. `;
        }

        eat(): string {
            return `<b>${this.food}=</b>  ${this.foodAmount} Kg <br>`;
        }


    }
}