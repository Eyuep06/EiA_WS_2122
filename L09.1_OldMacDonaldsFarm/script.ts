namespace OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);
    let cow: Animal = new Animal("die Kuh", "Graß", 15, "muuuuh", "Jon Jones", 50);
    let chicken: Animal = new Animal("das Huhn", "Insekten", 2, "gackgack", "Conor McGregor", 25);
    let pig: Animal = new Animal("das Schwein", "Heu", 5, "oink", "Dillon Danis", 50);
    let donkey: Animal = new Animal("der Esel", "Getreide", 10, "iiiiaa", "Leon Edwards", 30);
    let dog: Animal = new Animal("der Hund", "Äpfel", 3, "Wuff", "TJ Dilleshaw", 10);
    let allAnimals: Animal[] = [cow, chicken, pig, donkey, dog];


    function handleLoad(_event: Event): void {
        startDay();

    }


    function startDay(): void {

        for (let i: number = 0; i < allAnimals.length; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            let textArea: HTMLDivElement = <HTMLDivElement>document.getElementById("textarea");
            textArea.appendChild(p);

            let p2: HTMLParagraphElement = document.createElement("p");
            p2.innerHTML = allAnimals[i].stock();
            let stockArea: HTMLDivElement = <HTMLDivElement>document.getElementById("Vorrat");
            stockArea.appendChild(p2);
        }

    }

    uptadeStock();
    //setTimeout(uptadeStock, 2000); 
    //Timeout funktioniert irgendwie nicht

    function uptadeStock(): void {
        //cow
        cow.foodAmount = cow.foodAmount - cow.eatenAmount;

        //chicken
        chicken.foodAmount = chicken.foodAmount - chicken.eatenAmount;

        //pig
        pig.foodAmount = pig.foodAmount - chicken.eatenAmount;

        //donkey
        donkey.foodAmount = donkey.foodAmount - donkey.eatenAmount;

        //dog
        dog.foodAmount = dog.foodAmount - dog.eatenAmount;
    }



}