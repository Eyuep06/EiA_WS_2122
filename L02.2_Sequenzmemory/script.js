var sequenzmemory;
(function (sequenzmemory) {
    //var sign = prompt("What's your sign?");
    function shuffle(array) {
        var _a;
        var currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            _a = [
                array[randomIndex], array[currentIndex]
            ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
    }
    var eingabe = ["a", "b", "c", "d", "e"];
    shuffle(eingabe);
    console.log(eingabe);
})(sequenzmemory || (sequenzmemory = {}));
//# sourceMappingURL=script.js.map