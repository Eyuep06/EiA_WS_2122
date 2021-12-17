namespace Heritage {
    export class Cow extends Animal {
    breedArray: string[] = ["Angus", "Galloway", "Highland-Cattle"];
    i: number = Math.floor(Math.random() * 3);
    specialAction: string = "Ich kann dir Milch geben.";



    constructor() {
        super("Annabelle", "Gras", "Muh", 5, 50);
        super.doSpecialAction(this.specialAction);
        super.breedMethode(this.breedArray[this.i]);    

    }

    

}

}