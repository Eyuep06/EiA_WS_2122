namespace Heritage {
    export class Dog extends Animal {
    breedArray: string[] = ["Pitbull", "Kangal", "Pudel"];
    i: number = Math.floor(Math.random() * 3);
    specialAction: string = "Ich kann dir die Zeitung holen.";



    constructor() {
        super("Strolch", "Fleisch", "Wuff", 2, 10);
        super.doSpecialAction(this.specialAction);
        super.breedMethode(this.breedArray[this.i]);    

    }

    

}

}