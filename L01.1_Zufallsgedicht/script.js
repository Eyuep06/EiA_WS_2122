"use strict";
var abgabe2;
(function (abgabe2) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    for (let i = subjekte.length; i >= 1; i--) {
        //console.log(i);
        getVerse(subjekte, praedikate, objekte);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        let verse = "";
        let ergebnisSubjekte;
        let ergebnisPraedikate;
        let ergebnisObjekte;
        ergebnisSubjekte = Math.floor(Math.random() * subjekte.length);
        ergebnisPraedikate = Math.floor(Math.random() * praedikate.length);
        ergebnisObjekte = Math.floor(Math.random() * objekte.length);
        verse = verse + _subjekte.splice(ergebnisSubjekte, 1) + " " + _praedikate.splice(ergebnisPraedikate, 1) + " " + _objekte.splice(ergebnisObjekte, 1);
        console.log(verse);
    }
})(abgabe2 || (abgabe2 = {}));
//# sourceMappingURL=script.js.map