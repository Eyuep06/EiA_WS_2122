namespace Heritage {
    window.addEventListener("load", handleLoad);
    let dog: Animal = new Dog;
    let cow: Animal = new Cow;
    let chicken: Animal = new Chicken;
    let pig: Animal = new Pig;
    let donkey: Animal = new Donkey;
    let allAnimals: Animal[] = [dog, cow, chicken, pig, donkey];

    function handleLoad(_event: Event): void {
        startDay();
        
    }

    function startDay(): void  {
        for (let i: number = 0; i < allAnimals.length; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            let textArea: HTMLDivElement = <HTMLDivElement>document.getElementById("textarea");
            textArea.appendChild(p);

            let p2: HTMLParagraphElement = document.createElement("p");
            p2.innerHTML = allAnimals[i].eat();
            let stockArea: HTMLDivElement = <HTMLDivElement>document.getElementById("Vorrat");
            stockArea.appendChild(p2);
        }
    }

    uptadeStock();


    function uptadeStock(): void {
        dog.foodAmount = dog.foodAmount - dog.eatenAmount;
        cow.foodAmount = cow.foodAmount - cow.eatenAmount;
        chicken.foodAmount = chicken.foodAmount - chicken.eatenAmount;
        pig.foodAmount = pig.foodAmount - pig.eatenAmount;
        donkey.foodAmount = donkey.foodAmount - donkey.eatenAmount;
    }

}