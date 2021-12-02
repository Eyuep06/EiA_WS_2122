namespace OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);
    let cow: Animal = new Animal ("die Kuh", "Graß", 15, "muuuuh", "Jon Jones");
    let chicken: Animal = new Animal ("das Huhn", "Grains", 2, "gackgack", "Conor McGregor");
    let pig: Animal = new Animal ("das Schwein", "Fleisch", 5, "oink", "Dillon Danis");
    let donkey: Animal = new Animal ("der Esel", "Graß", 10, "iiiiaa", "Leon Edwards");
    let dog: Animal = new Animal ("der Hund", "Fleisch", 3, "Wuff", "TJ Dilleshaw");
    let allAnimals: Animal[] = [cow, chicken, pig, donkey, dog];
    // export interface FoodStock {
    //     [key: string]: number;
    // }

    // let food: FoodStock = {
    //     grasscer: 50,
    //     meat: 25,
    //     grains: 30
    // };


    
    function handleLoad (_event: Event): void {
        

        
        startDay();
    }


    function startDay(): void {
        for (let i: number = 0; i < allAnimals.length; i++) {
            let p: HTMLParagraphElement =  document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            let textArea: HTMLDivElement = <HTMLDivElement> document.getElementById("textarea");
            textArea.appendChild(p);
        }

        // for (let i: number = 1; i <= 3; i++ ) {
        //     let p2: HTMLParagraphElement = document.createElement("p");
        //     p2.innerHTML = allAnimals[i].stock(food);
        //     let vorratArea: HTMLDivElement = <HTMLDivElement> document.getElementById("Vorrat");
        //     vorratArea.appendChild(p2);
        // }
    }

    

}