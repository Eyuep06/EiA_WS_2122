namespace Heritage {
    export class Chicken extends Animal {
    breedArray: string[] = ["Seidenhuhn", "Leghorn", "Brahma"];
    i: number = Math.floor(Math.random() * 3 + 0);
    specialAction: string = "Ich kann dir Eier legen.";



    constructor() {
        super("Conor McChicken", "Körner", "Gack", 1, 8);
        super.doSpecialAction(this.specialAction);
        super.breedMethode(this.breedArray[this.i]);    

    }

    

}

}