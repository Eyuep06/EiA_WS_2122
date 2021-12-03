namespace OldMacDonaldsFarm {

    window.addEventListener("load", handleLoad);
    let cow: Animal = new Animal ("die Kuh", "Graß", 15, "muuuuh", "Jon Jones", 50);
    let chicken: Animal = new Animal ("das Huhn", "Insekten", 2, "gackgack", "Conor McGregor", 25);
    let pig: Animal = new Animal ("das Schwein", "Heu", 5, "oink", "Dillon Danis", 50);
    let donkey: Animal = new Animal ("der Esel", "Getreide", 10, "iiiiaa", "Leon Edwards", 30);
    let dog: Animal = new Animal ("der Hund", "Äpfel", 3, "Wuff", "TJ Dilleshaw", 10);
    let allAnimals: Animal[] = [cow, chicken, pig, donkey, dog];
    let grassStock: number = 50;
    let insectsStock: number = 25;
    let grainStock: number = 30;
    let appleStock: number = 10;
    let hayStock: number = 50;




    
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

        //cow
        cow.foodAmount = cow.foodAmount - cow.eatenAmount;
        console.log(cow.foodAmount);
        

       
    }

    

}