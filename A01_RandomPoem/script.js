var abgabe2;
(function (abgabe2) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    for (var i = subjekte.length; i >= 1; i--) {
        //console.log(i);
        getVerse(subjekte, praedikate, objekte);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        var verse = "";
        var ergebnisSubjekte;
        var ergebnisPraedikate;
        var ergebnisObjekte;
        ergebnisSubjekte = Math.floor(Math.random() * subjekte.length);
        ergebnisPraedikate = Math.floor(Math.random() * praedikate.length);
        ergebnisObjekte = Math.floor(Math.random() * objekte.length);
        verse = verse + _subjekte.splice(ergebnisSubjekte, 1) + " " + _praedikate.splice(ergebnisPraedikate, 1) + " " + _objekte.splice(ergebnisObjekte, 1);
        console.log(verse);
    }
})(abgabe2 || (abgabe2 = {}));
//# sourceMappingURL=script.js.map