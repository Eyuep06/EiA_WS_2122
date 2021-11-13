namespace L03Sequenzmemory {
    document.querySelector("button")?.addEventListener("click", startGame);
    let benutzereingabeArray: string[] = [];
    let benutzereingabe: string;
    let shuffledArray: string[] = [];
    let karte: HTMLSpanElement;
    let background: string;
    let allInputs: HTMLInputElement [];
    let formData: FormData;



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
            karte = document.createElement("span");
            spielfeld.appendChild(karte);
            karte.addEventListener("click", check);

            let buchstabe: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            karte.appendChild(buchstabe);
            buchstabe.innerHTML = shuffledArray[letters];
            letters--;
            setTimeout(function (): void { buchstabe.classList.add("isHidden"); }, 5000);
        }

        //übergabe klappt nicht
        formData = new FormData(document.forms[0]);
        background = allInputs[1].value;
        document.body.style.backgroundColor = background;

    }
    // die Überprüfung klappt leider noch nicht ganz
    function check(_event: MouseEvent): void {
        karte.classList.remove("isHidden");


        for (let i: number = 0; i <= shuffledArray.length; i++) {

            let nutzerClickArray: string[] = [];
            let target: HTMLElement = <HTMLElement>_event.target;

            let textContent: string = <string>target.textContent;
            nutzerClickArray.push(textContent);

            if (benutzereingabeArray[i] == nutzerClickArray[i] && i == shuffledArray.length) {
                alert("keep going bratha");

            }

            else if (benutzereingabeArray[i] != nutzerClickArray[i]) {
            alert("Schwache Leistung");

        }

    }






}



}
