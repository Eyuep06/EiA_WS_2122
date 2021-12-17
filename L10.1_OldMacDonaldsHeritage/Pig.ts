namespace Heritage {
    export class Pig extends Animal {
    breedArray: string[] = ["Wildschwein", "Berkshire-Schwein", "Hampshire-Schwein"];
    i: number = Math.floor(Math.random() * 3);
    specialAction: string = "Ich kann leider nichts.";



    constructor() {
        super("Ferkel", "Alles", "Grunz", 8, 25);
        super.doSpecialAction(this.specialAction);
        super.breedMethode(this.breedArray[this.i]);    

    }

    

}

}