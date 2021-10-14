namespace abgabe2 {

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    //console.log(subjekte, praedikate, objekte);



    for (let i: number = subjekte.length; i >= 1; i--) {
        //console.log(i);
        
        getVerse(subjekte, praedikate, objekte);
    

    }



    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): void {
        
        
        let verse: string = "";        

        let ergebnisSubjekte: number;
        let ergebnisPraedikate: number;
        let ergebnisObjekte: number;
        

        ergebnisSubjekte = Math.floor (Math.random() * subjekte.length);
        ergebnisPraedikate = Math.floor (Math.random() * praedikate.length);
        ergebnisObjekte = Math.floor (Math.random() * objekte.length);
        
        verse = verse +  _subjekte.splice(ergebnisSubjekte, 1) + " " + _praedikate.splice(ergebnisPraedikate, 1) + " " + _objekte.splice(ergebnisObjekte, 1);
        
        console.log(verse);
        
       
        
        

    }




}