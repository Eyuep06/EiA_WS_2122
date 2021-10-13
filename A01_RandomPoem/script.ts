namespace abgabe2 {

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];

    console.log(subjekte, praedikate, objekte);
    


    for (let i: number = subjekte.length; i >= 1; i--) {
        console.log(i);
        console.log(getVerse(subjekte, praedikate, objekte));
        
    }

    function getVerse (_subjekte: string[], _praedikate: string[], _objekte: string[]): void {
        let verse:  string[] = [""];
        console.log("Alohomora");

    }

    


}