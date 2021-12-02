namespace OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);
    let grassStock: number = 100;
    let grainsStock: number = 50;
    let meatStock: number = 25;
    let cow: Animal = new Animal ("die Kuh", "Graß", 15, "muuuuh", "Jon Jones");
    let chicken: Animal = new Animal ("das Huhn", "Grains", 2, "gackgack", "Conor McGregor");
    let pig: Animal = new Animal ("das Schwein", "Fleisch", 5, "oink", "Dillon Danis");
    let donkey: Animal = new Animal ("der Esel", "Graß", 10, "iiiiaa", "Leon Edwards");
    let dog: Animal = new Animal ("der Hund", "Fleisch", 3, "Wuff", "TJ Dilleshaw");
    let allAnimals: Animal[] = [cow, chicken, pig, donkey, dog];
    let textArea: HTMLDivElement = <HTMLDivElement> document.getElementById(".textarea");
    
    function handleLoad (_event: Event): void {
        console.log("bir iki bir iki");
        
        startDay();
    }


    function startDay(): void {
        for (let i: number = 0; i < allAnimals.length; i++) {
            let p: HTMLParagraphElement =  document.createElement("p");
            p.innerHTML = allAnimals[i].sing();
            textArea.appendChild(p);


        }
    }

    

}