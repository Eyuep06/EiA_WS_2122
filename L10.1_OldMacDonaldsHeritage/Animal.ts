namespace Heritage {
    export class Animal {
        name: string;
        food: string;
        noise: string;
        eatenAmount: number;
        foodAmount: number;
        breed: string;
        specialAction: string;
        

        constructor(_name: string, _food: string, _noise: string, _eatenAmount: number, _foodAmount: number) {
            this.name = _name;
            this.food = _food;
            this.noise = _noise;
            this.eatenAmount = _eatenAmount;
            this.foodAmount = _foodAmount;

        }

        sing(): string {
            return `Ich bin ${this.name} und ein ${this.breed}. Ich mache ${this.noise}. Ich esse gerne ${this.food}. ${this.specialAction} `;
        }

        eat(): string {
            return `<b>${this.food}=</b>  ${this.foodAmount} Kg <br>`;
        }

        doSpecialAction(_specialAction: string): void {
            this.specialAction = _specialAction;
        }

        breedMethode(_breed: string): void {
            this.breed = _breed; 
        }

    }
}