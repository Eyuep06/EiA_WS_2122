namespace Heritage {
    export class Dog extends Animal {
        breed: string [] = ["Pitbull", "Kangal", "Pudel"];

        constructor() {
            super("Strolch", "Fleisch", "Wuff", 2, 10);
        }
    }
 
}