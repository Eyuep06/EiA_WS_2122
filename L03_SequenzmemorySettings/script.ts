namespace L03Sequenzmemory {
    document.querySelector("button")?.addEventListener("click", startGame);
    let benutzereingabeArray: string[] = [];
    let benutzereingabe: string;



    function startGame(): void {

        document.getElementById("fsSpecial")?.classList.add("isHidden");
        let eingabefeldWert: HTMLInputElement = <HTMLInputElement>document.getElementById("eingabefeld");
        benutzereingabe = eingabefeldWert.value;
        benutzereingabeArray = benutzereingabe.split("");

        shuffle(benutzereingabeArray);
        createfield();

    }

    function shuffle(_array: string[]): string[] {
        let currentIndex: number = benutzereingabeArray.length, randomIndex: number;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [benutzereingabeArray[currentIndex], benutzereingabeArray[randomIndex]] = [benutzereingabeArray[randomIndex], benutzereingabeArray[currentIndex]];

        }

        console.log(benutzereingabeArray);
        console.log(benutzereingabe);

        return _array;
    }

    function createfield(): void {
        let letters: number = benutzereingabeArray.length - 1;
        while (letters >= 0) {

            let spielfeld: HTMLElement = <HTMLSpanElement>document.getElementById("spielfeld");
            let karte: HTMLSpanElement = document.createElement("span");
            spielfeld.appendChild(karte);
            let buchstabe: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            karte.appendChild(buchstabe);
            buchstabe.innerHTML = benutzereingabeArray[letters];
            letters--;

        }
    }



}

