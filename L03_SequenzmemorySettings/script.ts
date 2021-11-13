namespace L03Sequenzmemory {
    document.querySelector("button")?.addEventListener("click", startGame);
    let benutzereingabeArray: string[] = [];
    let benutzereingabe: string;
    let shuffledArray: string[] = [];



    function startGame(): void {

        document.getElementById("fsSpecial")?.classList.add("isHidden");
        let eingabefeldWert: HTMLInputElement = <HTMLInputElement>document.getElementById("eingabefeld");
        benutzereingabe = eingabefeldWert.value;
        benutzereingabeArray = benutzereingabe.split("");
        shuffledArray = benutzereingabe.split("");


        shuffle(benutzereingabeArray);
        createfield();

    }

    function shuffle(_array: string[]): string[] {
        let currentIndex: number = shuffledArray.length, randomIndex: number;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];

        }

        console.log(benutzereingabeArray);
        console.log(benutzereingabe);
        console.log(shuffledArray);
        

        return _array;
    }

    function createfield(): void {
        let letters: number = shuffledArray.length - 1;
        while (letters >= 0) {

            let spielfeld: HTMLElement = <HTMLSpanElement>document.getElementById("spielfeld");
            let karte: HTMLSpanElement = document.createElement("span");
            spielfeld.appendChild(karte);
            karte.addEventListener("click", check);

            let buchstabe: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            karte.appendChild(buchstabe);
            buchstabe.innerHTML = shuffledArray[letters];
            letters--;
            setTimeout(function (): void { buchstabe.classList.add("isHidden"); }, 5000);
        }

    }

    function check(_event: Event): void {
        console.log("ich wurde geklickt");
        // is clicked p value same as value 0 of correct sequenz array
        
    }
}





