var abgabe2;
(function (abgabe2) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objekte = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    console.log(subjekte, praedikate, objekte);
    for (var i = subjekte.length; i >= 1; i--) {
        console.log(i);
        console.log(getVerse(subjekte, praedikate, objekte));
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        var verse = [""];
        console.log("Alohomora");
    }
})(abgabe2 || (abgabe2 = {}));
//# sourceMappingURL=script.js.map