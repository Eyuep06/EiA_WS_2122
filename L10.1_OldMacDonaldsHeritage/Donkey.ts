namespace Heritage {
    export class Donkey extends Animal {
    breedArray: string[] = ["Pitbull", "Kangal", "Pudel"];
    i: number = Math.floor(Math.random() * 3 + 0);
    specialAction: string = "Ich kann für dich tragen.";



    constructor() {
        super("Esel", "Heu", "IiiAaa", 3, 9);
        super.doSpecialAction(this.specialAction);
        super.breedMethode(this.breedArray[this.i]);    

    }

    

}

}